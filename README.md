# Saavi 🤖

<p align="center">
  <strong>Your autonomous AI dev agent that fixes bugs, builds features, and ships PRs while you sleep</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/License-GPL--3.0-blue.svg" alt="GPL-3.0 License">
  <img src="https://img.shields.io/badge/Node.js-18+-green.svg" alt="Node.js 18+">
  <img src="https://img.shields.io/badge/TypeScript-Ready-blue.svg" alt="TypeScript Ready">
</p>

-----

 an async development agent

## 🎯 What is Saavi?

tackles bugs, small feature requests, and other software engineering tasks, with direct export to GitHub.

Saavi is your **async AI development companion** that understands your codebase and autonomously handles the tedious stuff:

- 🐛 **Bug Detective** – Finds and fixes issues across your entire repo
- ✨ **Feature Builder** – Implements new functionality from natural language descriptions
- 🧪 **Test Architect** – Writes comprehensive test suites that actually matter
- 🔄 **Code Surgeon** – Refactors legacy code without breaking anything
- 🚀 **PR Machine** – Opens clean, documented pull requests ready for review

**The difference?** Saavi doesn’t just generate code—it *understands context*, follows your patterns, and ships production-ready solutions.

## 🎬 See It In Action

```bash
You: "The user dashboard crashes when switching between dark/light themes"

Saavi: ✓ Analyzing codebase...
       ✓ Located theme state bug in UserDashboard.tsx
       ✓ Fixed CSS variable conflicts
       ✓ Added proper state cleanup
       ✓ Generated regression tests
       ✓ PR opened: https://github.com/yourorg/repo/pull/247

Time elapsed: 3 minutes
```

## 🚀 Key Features

### 🧠 **Intelligent & Autonomous**

- Scans your entire repository to understand architecture and patterns
- Makes contextual decisions based on your existing codebase
- Learns from your coding style and conventions

### 🔗 **GitHub Native**

- Direct integration with GitHub API
- Automatic PR creation with detailed descriptions
- Branch management and conflict resolution
- Issue linking and project board updates

### 🛡️ **Security & Privacy First**

- Your code **never** leaves your environment for training
- Self-hostable for enterprise security requirements
- Air-gapped deployment options available
- Fine-grained permission controls

### 🔧 **LLM Agnostic**

Choose your preferred AI backend:

- OpenAI GPT-4/GPT-4 Turbo
- Anthropic Claude
- Google Gemini
- Local models (Ollama, LM Studio)
- Custom API endpoints

## 📋 Use Cases

|Task Type      |Example Command                              |Saavi Action                                                       |
|---------------|---------------------------------------------|-------------------------------------------------------------------|
|**Bug Fix**    |“Fix memory leak in WebSocket connection”    |Identifies leak source, implements cleanup, adds monitoring        |
|**Feature Add**|“Add user authentication to the API”         |Creates auth middleware, routes, tests, and documentation          |
|**Refactor**   |“Convert class components to hooks”          |Systematically updates components while preserving functionality   |
|**Testing**    |“Add integration tests for payment flow”     |Writes comprehensive test suite with edge cases covered            |
|**Security**   |“Audit and fix SQL injection vulnerabilities”|Scans for issues, implements parameterized queries, adds validation|

## 🏗️ Quick Start

### Prerequisites

- Node.js 18+
- Git
- GitHub account and personal access token

### Installation

```bash
# Clone the repository
git clone https://github.com/likhonsdev/Saavi.git
cd Saavi

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your tokens and preferences

# Start Saavi
npm run start
```

### Basic Configuration

```env
# GitHub Integration
GITHUB_TOKEN=ghp_your_github_token_here
GITHUB_OWNER=your-username
GITHUB_REPO=your-repo-name

# AI Provider (choose one)
OPENAI_API_KEY=sk-your-openai-key
# OR
ANTHROPIC_API_KEY=sk-ant-your-claude-key
# OR  
GEMINI_API_KEY=your-gemini-key

# Optional: Custom settings
SAAVI_MODEL=gpt-4-turbo
SAAVI_TEMPERATURE=0.1
SAAVI_MAX_TOKENS=4000
```

## 🎮 Usage Examples

### CLI Mode

```bash
# Interactive mode
npx saavi

# Direct command
npx saavi "Add input validation to the contact form"

# With specific parameters
npx saavi --task "refactor" --file "src/utils/api.js" --description "Convert to TypeScript"
```

### API Mode

```javascript
import { Saavi } from './src/saavi';

const agent = new Saavi({
  github: { token: process.env.GITHUB_TOKEN },
  llm: { provider: 'openai', model: 'gpt-4-turbo' }
});

await agent.execute("Optimize database queries in user service");
```

## 🏢 Deployment Options

### 🌐 **SaaS** (Recommended for small teams)

Use our hosted version with enterprise-grade security and automatic updates.

### 🐳 **Docker** (Quick self-hosting)

```bash
docker run -d \
  -e GITHUB_TOKEN=$GITHUB_TOKEN \
  -e OPENAI_API_KEY=$OPENAI_API_KEY \
  -v $(pwd)/workspace:/app/workspace \
  likhonsdev/saavi:latest
```

### ⚡ **Self-Hosted** (Full control)

Deploy on your infrastructure with complete customization and air-gapped options.

### 🏛️ **Enterprise** (Contact us)

Dedicated instances, SSO integration, audit logging, and priority support.

## 🔐 Security & Compliance

- ✅ **SOC 2 Type II** compliance ready
- ✅ **GDPR** compliant data handling
- ✅ **Zero-trust** architecture
- ✅ Code never used for model training
- ✅ End-to-end encryption in transit
- ✅ Audit logs for all operations

## 🤝 Contributing

We love contributions! Whether it’s:

- 🐛 Bug reports and fixes
- 💡 Feature requests and implementations
- 📚 Documentation improvements
- 🧪 Test coverage enhancements

Check out our [Contributing Guide](CONTRIBUTING.md) to get started.

### Development Setup

```bash
# Fork and clone
git clone https://github.com/yourusername/Saavi.git

# Install dev dependencies  
npm install --include=dev

# Run tests
npm test

# Start in development mode
npm run dev
```

## 📊 Roadmap

- [ ] **Q1 2025**: Multi-language support (Python, Go, Rust)
- [ ] **Q2 2025**: Visual diff interface and code review assistance
- [ ] **Q3 2025**: Integration with popular IDEs (VS Code, JetBrains)
- [ ] **Q4 2025**: Advanced deployment automation and CI/CD pipelines

## 🎓 Learn More

- 📖 [Documentation](https://docs.saavi.dev)
- 🎥 [Video Tutorials](https://youtube.com/@saavi-dev)
- 💬 [Community Discord](https://discord.gg/saavi)
- 🐦 [Follow on Twitter](https://twitter.com/SaaviAgent)

## 📄 License

Saavi is open source software licensed under the [GPL-3.0 License](LICENSE).

**What this means:**

- ✅ Use commercially and personally
- ✅ Modify and distribute
- ✅ Private use allowed
- ❗ Must open source any modifications
- ❗ Must include license and copyright notice

## 🙋‍♀️ Support

Need help? We’ve got you covered:

- 📋 [GitHub Issues](https://github.com/likhonsdev/Saavi/issues) - Bug reports and feature requests
- 💬 [GitHub Discussions](https://github.com/likhonsdev/Saavi/discussions) - Community support
- 📧 [Email Support](mailto:support@saavi.dev) - Direct assistance
- 📚 [Knowledge Base](https://help.saavi.dev) - Comprehensive guides

-----

<p align="center">
  <strong>Made with ❤️ for developers who think faster than they type</strong><br>
  <sub>Star us on GitHub if Saavi helps you ship better code faster! ⭐</sub>
</p>
