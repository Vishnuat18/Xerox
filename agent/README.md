# SMART PRINT HUB - Windows Print Agent (Milestone 7 Prototype)

A high-performance background daemon for Xerox shop counter PCs running Windows 10 or Windows 11 (64-bit).

---

## 1. Key Capabilities

- **Automatic Spooler Enumeration:** Queries physical printers via native Windows CIM/WMI (`Win32_Printer`) through PowerShell without installing third-party drivers.
- **Bi-Directional Telemetry:** Sends periodic heartbeats with local IP, spooler queue depth, paper status, and latency.
- **Silent Print Dispatch:** Receives dispatched print orders from the owner dashboard and spools them directly to the target Xerox or Canon printer without opening annoying print dialogues.
- **Auto-Reconnect & Offline Resilience:** Maintains an exponential backoff loop in case shop broadband drops temporarily.

---

## 2. Requirements

- **Operating System:** Windows 10 (64-bit) or Windows 11 (64-bit)
- **Node.js:** Node.js v18 or higher (LTS recommended)
- **Print Spooler:** Standard Windows Print Spooler service enabled (Default)

---

## 3. Quick Start (Running on Counter PC)

```powershell
# 1. Open PowerShell or Command Prompt inside the agent directory
cd c:\Users\vishn\Desktop\Xerox\agent

# 2. Launch the agent with your shop's credentials
node agent.js --shop metro-xerox --token sph-live-demo-token
```

### Command-line Parameters:
- `--shop <slug>`: Your shop identifier slug (e.g., `metro-xerox`).
- `--token <token>`: Secure pairing key generated from the `/dashboard/printers` dashboard.
- `--server <url>`: Cloud server URL (defaults to `http://localhost:3000` for development).

---

## 4. Architecture Diagram

```
[ Customer Mobile ] ──> QR Upload ──> [ Smart Print Hub Cloud ]
                                               │
                                               │ WSS / HTTP Dispatch
                                               ▼
                                      [ agent.js on Counter PC ]
                                               │
                                               │ Win32 Spooler API
                                               ▼
                                  ┌─────────────────────────┐
                                  │  Xerox / Canon / HP MFP │
                                  └─────────────────────────┘
```
