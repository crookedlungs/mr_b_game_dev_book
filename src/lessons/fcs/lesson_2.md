# Lesson 2 - Managing Files and the Filesystem

Standards: [FCS.6B](../../standards.md#fcs1b)

---

## Video

---

## Introduction

In the digital world, managing files and understanding the filesystem are essential skills, especially for game designers. Whether you're working on a small project or a large game, keeping your files organized will save you time and reduce confusion. In this lesson, we'll learn how to set up a clear and efficient folder structure, name files correctly, and use naming conventions that make it easy to keep track of your work. These practices are key to ensuring that your game development process runs smoothly and that you can easily find and manage the files you need.

---

### Folder Structure

When creating your folders, keep the hierarchy simple. This means don't use a bunch of "nested" folders. Adding unnecessary subfolders can make your folder structure harder to understand and can potentially increase the time it takes to retrieve files.

#### Example

Consider the folder structure below:

```cpp
~/*
- Documents (folder)
-- Projects (folder)
--- SpaceShooter (folder)
---- Sprites (folder)
----- Sprite01.jpg (file)
----- Sprite02.jpg (file)
----- Sprite03.jpg (file)
~*/
```

This is a lot easier to read than:

```cpp
~/*
- Documents (folder)
-- Projects (folder)
--- SpaceShooter (folder)
---- Sprite01.jpg (file)
---- Sprites (folder)
----- Sprite02.jpg (file)
----- Other Sprites (folder)
------ Sprite3 (folder)
------- Sprite03.jpg (file)
~ */
```

### Naming Files and Folders

When naming files, there are certain rules we need to follow.

- **1:** Avoid Spaces
  - Having extra white space in our file names may make it easier for you to read but it makes it more difficult for the computer to locate the file.
- **2:** Keep It Simple
  - Avoid overly complex names for your files.
- **3:** Use letters (A-Z) and numbers (0-9). Avoid special characters.

#### Naming Conventions

Naming conventions allow us to follow our first rule (avoid spaces) of naming files and folders correctly. However, there are several different naming conventions we can use.

- ##### kebab-case

  A naming convention where multi-word identifiers are formed by removing spaces between words and replacing them with a hyphen `-`.

  `my-variable`

- ##### camelCase

  A way to separate the words in a phrase by making the first letter of each word capitalized and not using spaces. It is commonly used in web URLs, programming and computer naming conventions.

  `myVariable`

- ##### PascalCase

  A programming naming convention where the first letter of each compound word in a variable is capitalized.

  `MyVariable`

- ##### snake_case

  A naming convention in which each space is replaced with an underscore `_` character, and words are written in lowercase. It is a commonly used naming convention in computing, for example for variable and subroutine names, and for filenames.

  `my_variable`

##### File Versions

More often than not, you will create a new version of a file and still want to keep the original file. These files are now two separate versions of the same data.

When we create file versions, we need to make a note of that in our file name. Let's say we have a file called `variables.py` and we want to add more to it but still keep our original file. In order to show the differences in the two files, we would need to name the new one like this:

`VariablesV02.py`

It might also help to rename the original file to:

`VariablesV01.py`

Notice how we used `PascalCase` to add the file version. This keeps it easy to read, shows which version the file is, and still follows our first rule.
We also want to use a two‑digit format for numbers 0–9 (for example, 01 and not 1) to ensure correct numerical sequence.

##### Dates

If you need to add the data to a file name, use the following format:

`Variables20240903.py`

This helps with sorting and listing files in chronological order.

## Conclusion

Now that you’ve learned the basics of managing files and understanding the filesystem, you’re better equipped to keep your projects organized and efficient. By following best practices for folder structure and file naming, you’ll save time and avoid common pitfalls that can slow down your game development process. Remember, good organization is not just about keeping things tidy; it's about making your work easier and more enjoyable. As you continue to develop your skills in game design, these habits will help you stay on track and focused on what really matters—creating great games!
