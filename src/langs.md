# Languages

Programming languages are essential tools for creating software, each serving different purposes and offering unique features. They range from high-level languages designed for ease of use and abstraction to low-level languages that provide direct control over hardware. Some languages, like HTML and CSS, focus on structuring and styling content rather than performing computations. This page explores various types of languages, including high-level, mid-level, low-level, markup, and stylesheet languages, helping you understand their roles and applications in the world of programming and web development.

## High-Level Languages

These languages are easier for humans to read and write because they are more abstract and closer to natural language.

- [C#]()
- [JavaScript]()
- [Lua](./langs/lua.md)
- [Python](./langs/python.md)
- [TypeScript]()

**Example**

Here is a function in Python.

```python
def add_numbers(a, b):
    return a + b

result = add_numbers(5, 10)
print("The result is:", result)
```

## Mid-Level Languages

These languages combine features of both high-level and low-level languages. They offer a balance between the ease of use found in high-level languages and the control over hardware provided by low-level languages.

- [C]()
- [C++]()
- [Rust]()

**Example**

Here is a function in Rust.

```rust
fn add_numbers(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let result = add_numbers(5, 10);
    println!("The result is: {}", result);
}
```

## Low-Level Languages

These languages are closer to machine code and give programmers more control over the hardware, but they are more difficult to work with.

- [Assembly Language]()
- [Machine Code (binary)]()
- [Fortran]()
- [Ada]()
- [Pascal]()
- [Forth]()

**Example**

Here is a function in Assembly.

```armasm
    .section .text
    .global add_numbers

add_numbers:
    ADD r0, r0, r1  ; r0 = r0 + r1 (Add the values in r0 and r1, store result in r0)
    BX lr           ; Return from function (Branch to the link register)

```

## Game Engine Specific Languages

- [GDScript (Godot)]()

## Markup Languages

These are designed to structure and organize data in a readable format. They use tags or annotations to define elements within a document, such as headings, paragraphs, or links. Markup languages do not perform computations or execute logic; instead, they focus on defining the structure and content of documents, particularly in web development.

- [HTML (HyperText Markup Language)]()

  - Used to create and display structured documents on the web with specific semantics for different types of content

  **Example**

```html
<h1>Hello, World!</h1>
<p>This is a paragraph.</p>
```

- [XML (eXtensible Markup Language)]()

  - Used for representing structured data and doesn’t have predefined tags, allowing users to define their own tags.

  **Example**

```xml
<Title>Hello, World!</Title>
<Paragraph>This is a paragraph.</Paragraph>
```

## Stylesheet Languages

These are used to describe the presentation and design of a document, particularly web pages. They control how elements defined by markup languages (like HTML) are displayed, including layout, colors, fonts, and other visual aspects.

- [CSS (Cascading Style Sheets)]()

  **Example**

```css
h1 {
  color: blue;
  font-size: 24px;
}
```

- [Sass (Syntactically Awesome Style Sheets)]()

  **Example**

```scss
$primary-color: blue;

h1 {
  color: $primary-color;
  font-size: 24px;
}
```

## Shader Languages

- [GLSL]()
- [HLSL]()
