import { useState, useEffect } from 'react';
import { Container, Row, Col, Table, Form, Button, Badge, Alert } from 'react-bootstrap';
import axios from 'axios';
import usePageTitle from '../hooks/usePageTitle';

const API_BASE = 'https://onera-realestate.onrender.com';

function Admin() {
  usePageTitle('Admin');
  const [key, setKey] = useState(sessionStorage.getItem('onera_admin_key') || '');
  const [authed, setAuthed] = useState(false);
  const [leads, setLeads] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchLeads = async (adminKey) => {
    setLoading(true);
    setError('');
    try {
      const res = await axios.get(`${API_BASE}/api/leads`, {
        headers: { 'x-admin-key': adminKey },
      });
      setLeads(res.data);
      setAuthed(true);
      sessionStorage.setItem('onera_admin_key', adminKey);
    } catch (err) {
      setError('Incorrect access key, or the server is waking up — try again in a moment.');
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (key) fetchLeads(key);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    fetchLeads(key);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('onera_admin_key');
    setKey('');
    setAuthed(false);
    setLeads([]);
  };

  if (!authed) {
    return (
      <Container className="admin-login-page">
        <Row>
          <Col md={5} className="mx-auto">
            <div className="booking-card">
              <p className="section-tag">Admin</p>
              <h2 className="mb-4">Enter Access Key</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleLogin}>
                <Form.Control
                  type="password"
                  placeholder="Access Key"
                  value={key}
                  onChange={(e) => setKey(e.target.value)}
                  className="mb-3"
                  required
                />
                <Button type="submit" className="onera-btn w-100" disabled={loading}>
                  {loading ? 'Checking...' : 'View Leads'}
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
          <p className="text-muted">{leads.length} total submissions</p>
        </Col>
        <Col xs="auto">
          <Button variant="outline-secondary" onClick={() => fetchLeads(key)} className="me-2">
            Refresh
          </Button>
          <Button variant="outline-danger" onClick={handleLogout}>
            Log Out
          </Button>
        </Col>
      </Row>

      {leads.length === 0 ? (
        <p className="text-muted">No leads yet.</p>
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
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead._id}>
                  <td>{new Date(lead.createdAt).toLocaleDateString()}</td>
                  <td>{lead.fullName}</td>
                  <td><a href={`mailto:${lead.email}`}>{lead.email}</a></td>
                  <td><a href={`tel:${lead.phone}`}>{lead.phone}</a></td>
                  <td><Badge bg="secondary" className="admin-service-badge">{lead.service}</Badge></td>
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