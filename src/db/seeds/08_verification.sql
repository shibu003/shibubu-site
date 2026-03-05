-- Seed Agents
INSERT OR IGNORE INTO Agent (id, handle, status) VALUES ('agent_A', 'failing_A', 'ACTIVE');
INSERT OR IGNORE INTO Agent (id, handle, status) VALUES ('agent_B', 'failing_B', 'ACTIVE');
INSERT OR IGNORE INTO Agent (id, handle, status) VALUES ('agent_C', 'failing_C', 'ACTIVE');
INSERT OR IGNORE INTO Agent (id, handle, status) VALUES ('agent_D', 'whale_dominator', 'ACTIVE');

-- ISO Time
-- We use a fixed string for CURRENT_TIMESTAMP replacement or just '2026-02-14T12:00:00.000Z'
-- using a variable approach in sqlite is hard in pure sql file without vars.
-- I'll hardcode a time in the "middle" of the epoch 2026-02-14.

-- Events
-- D (Whale): 10 submissions, 10 bundles.
INSERT INTO EventLog (id, ts, actorType, actorId, eventType, entityType, entityId, hash, payload) VALUES 
('evt_d1', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d1', 'h', '{}'),
('evt_d2', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d2', 'h', '{}'),
('evt_d3', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d3', 'h', '{}'),
('evt_d4', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d4', 'h', '{}'),
('evt_d5', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d5', 'h', '{}'),
('evt_d6', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d6', 'h', '{}'),
('evt_d7', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d7', 'h', '{}'),
('evt_d8', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d8', 'h', '{}'),
('evt_d9', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_d9', 'h', '{}'),
('evt_da', '2026-02-14T12:00:00.000Z', 'HUMAN', 'whale_dominator', 'BILL_SUBMITTED', 'BILL', 'bill_da', 'h', '{}');

INSERT INTO DecisionBundle (id, billId, bundleJson, bundleHash, createdAt) VALUES 
('bun_d1', 'bill_d1', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_d2', 'bill_d2', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_d3', 'bill_d3', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_d4', 'bill_d4', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_d5', 'bill_d5', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_d6', 'bill_d6', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_d7', 'bill_d7', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_d8', 'bill_d8', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_d9', 'bill_d9', '{}', 'h', '2026-02-14T12:00:00.000Z'),
('bun_da', 'bill_da', '{}', 'h', '2026-02-14T12:00:00.000Z');

-- Others: Fails
-- A: 1 bill, 1 Gate Fail
INSERT INTO EventLog (id, ts, actorType, actorId, eventType, entityType, entityId, hash, payload) VALUES 
('evt_a1', '2026-02-14T12:00:00.000Z', 'HUMAN', 'failing_A', 'BILL_SUBMITTED', 'BILL', 'bill_a1', 'h', '{}');
INSERT INTO GateDecision (id, billId, verdict, reasons, policyVersion, inputHash, createdAt) VALUES
('gate_a1', 'bill_a1', 'FAIL', '[]', '1.0', '', '2026-02-14T12:00:00.000Z');

-- B: 1 bill, 1 Audit Fail
INSERT INTO EventLog (id, ts, actorType, actorId, eventType, entityType, entityId, hash, payload) VALUES 
('evt_b1', '2026-02-14T12:00:00.000Z', 'HUMAN', 'failing_B', 'BILL_SUBMITTED', 'BILL', 'bill_b1', 'h', '{}');
INSERT INTO AuditReport (id, billId, verdict, severity, reasons, auditorProvenance, inputHash, createdAt) VALUES
('audit_b1', 'bill_b1', 'FAIL', 'HIGH', '[]', '{}', '', '2026-02-14T12:00:00.000Z');

-- C: 1 bill, Suspicious
INSERT INTO EventLog (id, ts, actorType, actorId, eventType, entityType, entityId, hash, payload) VALUES 
('evt_c1', '2026-02-14T12:00:00.000Z', 'HUMAN', 'failing_C', 'BILL_SUBMITTED', 'BILL', 'bill_c1', 'h', '{}');
INSERT INTO GateDecision (id, billId, verdict, reasons, policyVersion, inputHash, createdAt) VALUES
('gate_c1', 'bill_c1', 'WARN', '["SEMANTIC_EVASION"]', '1.0', '', '2026-02-14T12:00:00.000Z');
