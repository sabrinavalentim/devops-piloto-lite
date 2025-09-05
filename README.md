# 🚀 DevOps Piloto Lite

[![CI](https://img.shields.io/github/actions/workflow/status/sabrinavalentim/devops-piloto-lite/ci-lite.yml?label=CI&logo=github)](https://github.com/sabrinavalentim/devops-piloto-lite/actions)
[![Docker](https://img.shields.io/badge/Docker-ready-blue?logo=docker)](https://www.docker.com/)

> Projeto de demonstração de **containerização + CI/CD** para apresentar o fluxo DevOps de forma simples, usando Node.js, Docker e GitHub Actions.

---

## 📂 Estrutura do Projeto

aplicativo/ola-api-lite # Código da aplicação Node/Express
docker-compose.yml # Sobe a aplicação em container localmente
.github/workflows/ci-lite.yml # Pipeline CI (build + testes)
documentos/ # Documentação e roteiro de apresentação


---

## ▶️ Como Rodar Localmente

> **Pré-requisito:** Docker (Desktop ou Engine) + Compose v2

```bash
git clone https://github.com/sabrinavalentim/devops-piloto-lite.git
cd devops-piloto-lite
docker compose up --build -d
curl http://localhost:3000/health

A aplicação estará disponível em http://localhost:3000
.

Push ou Pull Request → Workflow roda build + testes.

Imagem Docker gerada pode ser publicada em registry (GHCR/ACR).

Deploy manual ou automatizado pode ser disparado usando o script implantação/deploy.sh.

