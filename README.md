# Saavi
Saavi is your customizable, async AI dev agent built for security, control, and direct GitHub automation—perfect for teams looking for a powerful   with broader LLM and self-hosting flexibility.

<p align="center">
  <img src="https://res.cloudinary.com/dktp1ybbx/image/upload/c_limit,h_170,w_170/f_auto,fl_lossy,q_auto/v1631659747/organization/prod/1200978/6Us7cThUNd.png" alt="Saavi Logo" width="100" />
</p>

<h1 align="center">Saavi</h1>
<p align="center"><strong>Async AI that fixes bugs, builds features — smart, not rigid.</strong></p>

---

### 🧠 What is Saavi?

**Saavi** is your customizable async AI development agent that autonomously tackles:
- 🐞 Bug fixes  
- ✨ Feature requests  
- 🧪 Test writing  
- 🔁 Refactoring  
- 🚀 GitHub PRs — with zero hand-holding

Whether you’re drowning in issues or just want a smarter co-developer, Saavi steps in with **less structure, more intelligence**.

---

### 🚀 Features

- ⚙️ **Autonomous Agent Flow** – You describe. Saavi builds.
- 🔄 **GitHub Integration** – Connect and auto-export pull requests.
- 🧩 **LLM-Agnostic** – Works with OpenAI, Gemini, Claude, or your own local model.
- 🔐 **Privacy-First** – Your private code is never used for training.
- 🛠️ **Self-Hostable** – Deploy in air-gapped or secure enterprise environments.
- 📜 **GPL-3.0 Licensed** – Fully open and modifiable.

---

### 🛡️ Built for Developers, Trusted by Ops

Saavi isn’t just a dev tool—it’s your **mission partner**:
- Scan private repos without leaking data  
- Run on local, cloud, or hybrid environments  
- Automate small tasks with enterprise-grade security  
- Inject intelligence into daily dev workflows  

---

### 🧪 Use Cases

| ✅ Task Type            | 🧠 Example Input                                        |
|------------------------|--------------------------------------------------------|
| Bug Fix                | "Fix crash on login when user token is missing"       |
| Small Feature          | "Add dark mode toggle to settings page"               |
| Code Cleanup           | "Remove unused imports and dead code"                 |
| Test Generation        | "Write unit tests for `UserService.ts`"              |
| GitHub Automation      | "Open PR with commit titled 'Improve error handling'" |

---

### 🔧 Getting Started

```bash
# Clone Saavi
git clone https://github.com/your-org/saavi.git
cd saavi

# Install dependencies
npm install   # or yarn

# Add your GitHub token
echo "GITHUB_TOKEN=your_token_here" > .env

# Run Saavi
npm run dev   # or start CLI agent mode
