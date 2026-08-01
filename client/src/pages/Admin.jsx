import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Form, Button, Badge, Alert } from 'react-bootstrap';
import axios from 'axios';
import { Eye, EyeSlash } from 'react-bootstrap-icons';
import usePageTitle from '../hooks/usePageTitle';
import services from '../data/services';

const API_BASE = 'https://onera-realestate.onrender.com';

function Admin() {
  usePageTitle('Admin');
  const [token, setToken] = useState(sessionStorage.getItem('onera_admin_token') || '');
  const [authed, setAuthed] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [serviceFilter, setServiceFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  const fetchLeads = async (authToken) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_BASE}/api/leads`, {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      setLeads(res.data);
      setAuthed(true);
    } catch (err) {
      setError('Session expired or invalid — please log in again.');
      setAuthed(false);
      sessionStorage.removeItem('onera_admin_token');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (token) fetchLeads(token);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const res = await axios.post(`${API_BASE}/api/auth/login`, { email, password });
      const newToken = res.data.token;
      sessionStorage.setItem('onera_admin_token', newToken);
      setToken(newToken);
      await fetchLeads(newToken);
    } catch (err) {
      setError('Incorrect email or password, or the server is waking up — try again in a moment.');
      setLoading(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('onera_admin_token');
    setToken('');
    setAuthed(false);
    setLeads([]);
  };

  const toggleContacted = async (lead) => {
    try {
      const res = await axios.patch(
        `${API_BASE}/api/leads/${lead._id}`,
        { contacted: !lead.contacted },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setLeads(leads.map((l) => (l._id === lead._id ? res.data : l)));
    } catch (err) {
      setError('Could not update status — try refreshing.');
    }
  };

  const filteredLeads = leads.filter((lead) => {
    const serviceMatch = serviceFilter === 'all' || lead.service === serviceFilter;
    const statusMatch =
      statusFilter === 'all' ||
      (statusFilter === 'contacted' && lead.contacted) ||
      (statusFilter === 'pending' && !lead.contacted);
    return serviceMatch && statusMatch;
  });

  if (!authed) {
    return (
      <Container className="admin-login-page">
        <Row>
          <Col md={5} className="mx-auto">
            <div className="booking-card">
              <p className="section-tag">Admin</p>
              <h2 className="mb-4">Log In</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                {loading && (
                  <p className="text-muted text-center mb-3" style={{ fontSize: '13px' }}>
                    Waking up the server — this can take up to a minute after inactivity.
                  </p>
                )}

                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-3"
                  required
                />

                <div className="password-field-wrap mb-3">
                  <Form.Control
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle-btn"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label={showPassword ? 'Hide password' : 'Show password'}
                  >
                    {showPassword ? <EyeSlash size={18} /> : <Eye size={18} />}
                  </button>
                </div>

                <Button type="submit" className="onera-btn w-100" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Logging in...
                    </>
                  ) : (
                    'Log In'
                  )}
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="admin-page">
      <Row className="align-items-center mb-4">
        <Col>
          <h1>Leads</h1>
          <p className="text-muted">{filteredLeads.length} of {leads.length} submissions</p>
        </Col>
        <Col xs="auto">
          <Button variant="outline-secondary" onClick={() => fetchLeads(token)} className="me-2">
            Refresh
          </Button>
          <Button variant="outline-danger" onClick={handleLogout}>
            Log Out
          </Button>
        </Col>
      </Row>

      <Row className="g-3 mb-4">
        <Col md={4}>
          <Form.Select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value)}>
            <option value="all">All Services</option>
            {services.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="contacted">Contacted</option>
          </Form.Select>
        </Col>
      </Row>

      {filteredLeads.length === 0 ? (
        <p className="text-muted">No leads match this filter.</p>
      ) : (
        <div className="admin-table-wrap">
          <Table hover responsive className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Service</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {filteredLeads.map((lead) => (
                <tr key={lead._id}>
                  <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td>{lead.fullName}</td>
                  <td><a href={`mailto:${lead.email}`}>{lead.email}</a></td>
                  <td><a href={`tel:${lead.phone}`}>{lead.phone}</a></td>
                  <td><Badge bg="secondary" className="admin-service-badge">{lead.service}</Badge></td>
                  <td>
                    <Form.Check
                      type="switch"
                      checked={lead.contacted}
                      onChange={() => toggleContacted(lead)}
                      label={lead.contacted ? 'Contacted' : 'Pending'}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </Container>
  );
}

export default Admin;