# Lesson 4 - Directories

Standards: [FCS.6B](../../standards.md#fcs1b)

**Objectives:**

By the end of this lesson, you will know how to:

- Identify what a directory is.
- Understand the difference between directories and files.
- Create, navigate, and organize directories.
- Use directories to manage files efficiently in a computer system.

---

## Introduction

In this lesson, we will learn about directories, one of the most fundamental concepts in computer science and file management. A directory is like a folder on your computer where you can store and organize files. Understanding how directories work and how to navigate them will make it easier for you to manage your projects, documents, and files as you dive deeper into computer science.

---

## Directories

### What is a Directory?

A directory is a special kind of file that contains other files and subdirectories. It’s similar to a folder in real life where you keep different documents, papers, or items. Directories help you organize and group files logically so that you can find them quickly.

**Example:**

Imagine your school backpack is a directory. Inside the backpack, you have different folders (subdirectories) for each subject: Math, Science, English, etc. Inside each folder, there are papers (files) related to that subject. The structure makes it easier to find what you need.

We can show that as:

```mathematica
MyBackpack
├── MathFolder
│ ├── math_homework
├── ScienceFolder
│ ├── science_homework
├── EnglishFolder
│ ├── english_essay
```

### Directory Structure

Computers use a directory structure that looks like a tree, often called a `file system`. The top of the tree is called the `root directory`, and below it are subdirectories and files. In this structure:

- The `root` directory is the main directory.
- Subdirectories branch off from the `root`, containing more files and directories.
- Files are the actual pieces of data stored in the directories, such as documents, images, or programs.

Here's an example of a simple directory structure:

```mathematica
Root Directory
├── Documents
│ ├── homework.docx
│ ├── notes.txt
├── Pictures
│ ├── vacation.jpg
│ └── school.png
└── Projects
├── GameProject
│ ├── main.py
│ └── assets
│ ├── sprite.png
└── science_project.docx
```

Here is another example:

```mathematica
C:\Users\john.smith\Desktop\Projects
```

This can also be read as:

```mathematica
Root\SystemDirectory\HomeDirectory\Desktop\WorkingDirectory
```

Notice how we don't use spaces in the directory names. This would confuse the computer. A general rule is to use [PascalCase]() for directories and either [kebab-case]() or [snake_case]() for files.

### Navigating Directories

To work with directories, you need to know how to navigate through them. There are two main ways to do this:

- Graphical Interface (like File Explorer on Windows or Finder on macOS): You click on folders and files to open them.
- Command Line Interface (CLI): Using text commands to move between directories. Some common commands include:
  - `cd` (change directory): Moves you into a different directory.
  - `ls` (list): Displays the files and subdirectories in your current directory.
  - `mkdir` (make directory): Creates a new directory.

The easiest way is to use the three buttons to the left of the `Directory` field on the File Explorer. They do the following:

- `<--` Navigates to the previous directory.
- `-->` Navigates to the next directory.
- `^` Navigates to the parent directory.

![Directory Buttons](https://lh3.googleusercontent.com/d/1NjsbSbIT1S01Y3vt-0IrvAkW4ADOA10F)

As an example, here we can see we have a directory `MyProject` with a sub-directory `Sprites`.

`MyProject` is the **parent** of `Sprites`.

```mathematica
MyProject\Sprites
```

### Organizing Files Using Directories

Using directories helps keep your files organized. For example, you can create a directory for each school subject, with subdirectories for each project or assignment. It makes finding and managing files much easier.

### Tips for Organizing Files:

- Group similar files together in a directory.
- Use descriptive names for your directories and files.
- Avoid having too many files in the same directory to prevent clutter.

### Types of Directories

- **Home Directory:** This is the default directory where all your personal files and folders are stored. On most systems, it’s named after your user account.
- **System Directories:** These contain files that the operating system uses. You won’t need to change these often, but they are essential for your computer to work.
- **Working Directory:** The directory you are currently working in. When using the command line, this is the directory where the computer looks for your files.

![Directory Example](https://lh3.googleusercontent.com/d/1q3KYI2Tlbg363jsmg539f2Ls2TOksDGz)

---

## Conclusion

Directories are a powerful way to organize and manage files on your computer. By understanding how to navigate and structure directories, you can make your work more efficient and easier to manage. Whether you're working on a coding project, organizing school files, or managing photos, knowing how to use directories is an essential skill for every computer user.
