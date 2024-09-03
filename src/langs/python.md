# Introduction to Python Programming

Python is a versatile, easy-to-learn programming language that’s widely used in web development, data science, automation, and more. Its simple syntax and readability make it a great choice for beginners.

---

## Variables

<iframe width="750" height="315" src="https://www.youtube.com/embed/pHOH7UfOhbE?si=wD8pUyE9eLLoGx3g" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Defining Variables**

In Python, you define [variables](../vocabulary.md#variable) by simply assigning a value to a name.

```python
my_variable = 10
```

Python automatically determines the type of the [variable](../vocabulary.md#variable) based on the value assigned, so there’s no need to declare the type explicitly.

---

## Data Types

<iframe width="750" height="315" src="https://www.youtube.com/embed/ppsCxnNm-JI?si=B8uyugVplNV2gLpr" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Python supports various data types:

**Numbers:** Represent [integers](../vocabulary.md#integer) or [foating-point numbers](../vocabulary.md#floating-point-number-float).

```python
num1 = 10       # integer
num2 = 10.5     # floating-point number
```

**Strings:** Text data enclosed in single or double quotes.

```python
str1 = 'Hello'
str2 = "World"
```

**Booleans:** Represent `true` or `false`.

```python
is_true = True
is_false = False
```

**Lists:** Ordered collections of items, which can be of any type.

```python
my_list = [1, 2, 3]
```

**Dictionaries:** Collections of key-value pairs.

```python
my_dict = {'key': 'value'}
```

---

## Control Structures

**If-Else Statements:**

```python
age = 15

if age < 18:
    print("You are a minor.")
elif age < 60:
    print("You are an adult.")
else:
    print("You are a senior.")
```

<iframe width="750" height="315" src="https://www.youtube.com/embed/-BOBedcjySI?si=NFkteZIajCy81enC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**Loops:**

- **For Loop:**

```python
for i in range(1, 6):
    print(i)  # Prints numbers from 1 to 5
```

<iframe width="750" height="315" src="https://www.youtube.com/embed/zmIdC0_0BgY?si=p0pY8BovuImg9rhT" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

- **While Loop:**

```python
count = 1
while count <= 5:
    print(count)
    count += 1
```

<iframe width="750" height="315" src="https://www.youtube.com/embed/ECduJk00mUU?si=K5F2uVwLZ4bDIK8Y" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

---

## Functions

<iframe width="750" height="315" src="https://www.youtube.com/embed/zvzjaqMBEso?si=eRhmYJa_WhVid15T" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[Functions](../vocabulary.md#function) in Python are defined using the `def` keyword.

**Defining a Function**

```python
def greet(name):
    return "Hello, " + name

print(greet("Alice"))  # Output: Hello, Alice
```

**Function with Multiple Parameters**

```python
def add(a, b):
    return a + b

print(add(5, 3))  # Output: 8
```

**Anonymous Functions(Lambdas)**

```python
square = lambda x: x * x

print(square(4))  # Output: 16
```

---

## Lists and Dictionaries

**Creating a List**

```python
my_list = [1, 2, 3]

print(my_list[0])  # Output: 1
```

**Creating a Dictionary**

```python
person = {
    'name': 'John',
    'age': 30
}

print(person['name'])  # Output: John

```

---

## Error Handling

**Try-Except**

```python
def safe_divide(a, b):
    try:
        return a / b
    except ZeroDivisionError:
        return "Cannot divide by zero"

result = safe_divide(10, 0)
print(result)  # Output: Cannot divide by zero
```

---

## Conclusion

Python’s simplicity and readability make it an excellent language for beginners. By learning how to define [variables](../vocabulary.md#variable), use control structures, and create functions, students can quickly start building their own projects and applications.
