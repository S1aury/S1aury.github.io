@echo off
setlocal
cd /d "%~dp0"
set "ASTRO_TELEMETRY_DISABLED=1"
set "PORTFOLIO_NODE=node"
where node >nul 2>nul
if errorlevel 1 set "PORTFOLIO_NODE=%USERPROFILE%\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe"
if not exist "node_modules\astro\bin\astro.mjs" (
  echo Dependencies are missing. Install Node.js 24 LTS, then run npm ci in this folder.
  pause
  exit /b 1
)
echo Open the Local URL below. Press Ctrl+C to stop.
"%PORTFOLIO_NODE%" node_modules\astro\bin\astro.mjs dev --host 127.0.0.1
