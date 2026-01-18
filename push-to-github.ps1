# PowerShell script to push to GitHub
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your GitHub details

Write-Host "GitHub Repository Setup Script" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

$username = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter repository name (default: sales-dashboard-app)"
if ([string]::IsNullOrWhiteSpace($repoName)) {
    $repoName = "sales-dashboard-app"
}

$repoUrl = "https://github.com/$username/$repoName.git"

Write-Host ""
Write-Host "Repository URL: $repoUrl" -ForegroundColor Yellow
Write-Host ""

$confirm = Read-Host "Have you created this repository on GitHub? (y/n)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host ""
    Write-Host "Please create the repository on GitHub first:" -ForegroundColor Red
    Write-Host "1. Go to https://github.com/new" -ForegroundColor Cyan
    Write-Host "2. Name it: $repoName" -ForegroundColor Cyan
    Write-Host "3. DO NOT initialize with README, .gitignore, or license" -ForegroundColor Cyan
    Write-Host "4. Click 'Create repository'" -ForegroundColor Cyan
    Write-Host ""
    $confirm = Read-Host "Press Enter after creating the repository, or 'n' to cancel"
    if ($confirm -eq "n" -or $confirm -eq "N") {
        Write-Host "Cancelled." -ForegroundColor Red
        exit
    }
}

Write-Host ""
Write-Host "Adding remote origin..." -ForegroundColor Yellow
git remote add origin $repoUrl 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Remote might already exist. Updating..." -ForegroundColor Yellow
    git remote set-url origin $repoUrl
}

Write-Host "Setting branch to main..." -ForegroundColor Yellow
git branch -M main

Write-Host "Pushing to GitHub..." -ForegroundColor Yellow
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Success! Your code has been pushed to GitHub!" -ForegroundColor Green
    Write-Host "View it at: $repoUrl" -ForegroundColor Cyan
} else {
    Write-Host ""
    Write-Host "Error pushing to GitHub. Please check:" -ForegroundColor Red
    Write-Host "1. Repository exists on GitHub" -ForegroundColor Yellow
    Write-Host "2. You have access to push" -ForegroundColor Yellow
    Write-Host "3. Your Git credentials are configured" -ForegroundColor Yellow
}

