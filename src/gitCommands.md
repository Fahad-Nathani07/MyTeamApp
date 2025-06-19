### 1. Get SSH URL from GitHub repo:
```bash
SSH: git@github.com:Fahad-Nathani07/MyTeamApp.git
```

### 2. Link local repo to GitHub:
- Make sure you're inside your project folder (MyTeamApp) and run:
```bash
git remote add origin git@github.com:Fahad-Nathani07/MyTeamApp.git

git branch -M main
git push -u origin main
```
### 3. If error encountered:
```bash
git add .
git commit -m "Initial commit: Vite + React + Tailwind setup"



git branch -M main

git push -u origin main
```
<!-- Pull, push, commit, fetch-origin, stashpop, status, diff, branch, add, remote -->

```bash
git remote set-url origin git@github.com:Fahad-Nathani07/MyTeamApp.git

```

# 🔹ChatGPT Explanation:
### Pull, push, commit, fetch-origin, stashpop, status, diff, branch, add(for all files, for specific files, etc), remote, etc

1. git pull
- What it does:
    * Fetches the latest changes from the remote repo and merges them into your current local branch.

- When to use:
    * Before starting your work each day
    * Before committing, to avoid conflicts
    * To sync your local code with teammates

- 💡 Syntax:
```bash
git pull
```

- 🔗 Combo with a branch:
```bash
git pull origin main
```


---
2. git push
- What it does:
* Sends your committed changes from local → GitHub (remote repo).

- When to use:
* After a commit
* After finishing a task or feature

- 💡 Syntax:
```bash
git push
```

- 🔗 Combo with a branch:
```bash
git push -u origin main
```

---
3. git commit
- What it does:
* Takes a snapshot of staged changes and saves it to local history.

- When to use:
* After staging (git add)
* When a meaningful change or feature is done

- 💡 Syntax:
```bash
git commit -m "Add login page with validation"
```

---
4. git fetch origin
- What it does:
* Fetches latest remote changes without merging them into your code.

- When to use:
* To just see what others have pushed
* Before reviewing or inspecting changes

- 💡 Syntax:
```bash
git fetch origin
```
🔗 Combine with git diff to preview changes before merging


---
5. git stash pop
- What it does:
* Restores your most recently stashed changes
* Removes the stash entry from history

- When to use:
* When you temporarily saved work using git stash
* After switching branches or pulling, and now want your old code back

- 💡 Syntax:
```bash
git stash pop
```


---
6. git status
- What it does:
* Shows the current state of your repo — what’s modified, staged, or untracked

- When to use:
* Always — before staging or committing

- 💡 Syntax:
```bash
git status
```

---
7. git status
- What it does:
* Shows the exact line-by-line changes that haven't been staged or committed

- When to use:
* To preview what you changed before adding/committing

- 💡 Syntax:
```bash
git diff           # See unstaged changes
git diff --staged  # See staged changes
```

---
8. git branch
- What it does:
* Lists all branches, or creates a new branch

- When to use:
* To switch or create features
* To organize different code versions

- 💡 Syntax:
```bash
git branch                  # List branches
git branch feature/login    # Create a new branch
git checkout feature/login  # Switch to it
```
🔗 Combine with git checkout -b:
```bash
git checkout -b feature/login
```

---
9. git add
- What it does:
* Stages files for committing

- When to use:
* After editing files, before committing

- 💡 Syntax:
```bash
git add .         # Add all changes
git add src/App.jsx  # Add specific file
git add src/       # Add everything inside src folder
```

---
10. git remote
- What it does:
* Manages remote repos (e.g., GitHub link)

- When to use:
* To set or change the remote URL
* To check which GitHub repo is connected

- 💡 Syntax:
```bash
git remote -v                          # View current remote
git remote add origin <url>           # Add remote
git remote set-url origin <new-url>   # Update remote
```
---



---
11. git checkout -b edit-user-feature(branch-name)
- What it does:
* checkout -b = create and switch to a new branch
* edit-user-feature = name of the new branch (you can change)
* Creates a new local branch called edit-user-feature
* Switches you to that new branch immediately
* It combines two actions: git branch + git checkout

- When to use:
* Anytime you start a new feature, bug fix, or task
* When you want to keep work separate from main
* Common in team workflows (one branch per feature)

- 💡 Syntax:
```bash
git checkout -b edit-user-feature

git push -u origin edit-user-feature #(dont forget to push)

```



---
12. git push -u origin edit-user-feature
- What it does:
* Pushes your local branch to GitHub
* -u sets the "upstream" so future git push and git pull work automatically without specifying the branch name again

- When to use:
* First time you push a new local branch to GitHub
* After creating a new feature branch


- 💡 Syntax:
```bash
git push -u origin <branch-name>

git push -u origin edit-user-feature

```
📌 After this, you can just run git push or git pull without repeating the branch name.

---
13. git clone git@github.com:Fahad-Nathani07/MyTeamApp.git
- What it does:
* Clones (downloads) the entire GitHub repository into your local system
* Includes all files, commit history, and default branch (main)
* Uses SSH connection for secure access

- When to use:
* When starting work on a project that already exists on GitHub
* When switching systems or folders and want a fresh copy

- 💡 Syntax:
```bash
git clone <repo-URL>
# using SSH
git clone git@github.com:Fahad-Nathani07/MyTeamApp.git
# using HTTPS
git clone https://github.com/Fahad-Nathani07/MyTeamApp.git


```
📌 After this, you can just run git push or git pull without repeating the branch name.

---









---
## 🧠 Example Combo (Real Team Workflow)
```bash
git status             # Check what's changed
git add .              # Stage all files
git commit -m "Fix navbar layout"
git pull origin main   # Sync latest changes
git push               # Push my work
```











# 🧾 Git Command Cheatsheet (Printable, Beginner-to-Pro)


Absolutely! Here's your Git cheatsheet in **Markdown `.md`-friendly format** — perfect for saving to a `GIT-CHEATSHEET.md` file in your project or printing from Markdown editors like VS Code, Typora, Obsidian, etc.



# 📘 Git Command Cheatsheet

A concise and real-world usage guide to Git commands for daily development.



## 🔹 1. Initialize Git Repo

```bash
git init
```

* Creates a new Git repository in the current folder.
* Use only once per project at the beginning.

---

## 🔹 2. Clone an Existing GitHub Repo

```bash
git clone <repository-url>
```

* Downloads a copy of a remote GitHub repo.
* Example:

  ```bash
  git clone git@github.com:username/project.git
  ```

---

## 🔹 3. Check Git Status

```bash
git status
```

* Shows which files are modified, untracked, or staged.
* Run before committing to verify changes.

---

## 🔹 4. Add Files

```bash
git add .
```

* Stages **all** modified and new files.

```bash
git add src/App.jsx
```

* Stages a **specific file**.

```bash
git add src/
```

* Stages all files in a **folder**.

---

## 🔹 5. Commit Changes

```bash
git commit -m "Your message here"
```

* Saves staged changes as a snapshot to your local Git history.

---

## 🔹 6. Push to Remote (GitHub)

```bash
git push
```

* Pushes your commits to GitHub.

```bash
git push -u origin main
```

* First-time push with tracking branch (adds upstream).

---

## 🔹 7. Pull Changes

```bash
git pull
```

* Downloads and merges new commits from GitHub into your current branch.

```bash
git pull origin main
```

* Pulls explicitly from the `main` branch of the `origin` remote.

---

## 🔹 8. Fetch Changes Without Merge

```bash
git fetch origin
```

* Downloads changes but does **not merge** into your local branch.
* Use with `git diff` or `git merge`.

---

## 🔹 9. Stash Temporary Changes

```bash
git stash
```

* Temporarily hides your working changes.

```bash
git stash pop
```

* Brings back the most recent stash.

---

## 🔹 10. View Differences

```bash
git diff
```

* See **unstaged** changes.

```bash
git diff --staged
```

* See **staged** changes.

---

## 🔹 11. Branch Management

```bash
git branch
```

* List all branches.

```bash
git branch feature/login
```

* Create a new branch.

```bash
git checkout feature/login
```

* Switch to that branch.

```bash
git checkout -b feature/login
```

* Create and switch to new branch (shortcut).

---

## 🔹 12. Merge Branches

```bash
git merge feature/login
```

* Merges the `feature/login` branch into your current branch.

---

## 🔹 13. Remote Repo Management

```bash
git remote -v
```

* Shows linked remote repositories.

```bash
git remote add origin <url>
```

* Links your project to a GitHub repo.

```bash
git remote set-url origin <new-url>
```

* Changes the remote repo link.

---

## 🔹 Bonus: Reset & Undo (Advanced)

```bash
git reset HEAD <file>
```

* Unstages a file.

```bash
git checkout -- <file>
```

* Discards local changes in file.

---

## ✅ Recommended Workflow

```bash
git status
git add .
git commit -m "Describe what changed"
git pull origin main   # Always pull before pushing
git push
```


- More



