# Introduction to Lua Programming

Lua is a powerful, lightweight scripting language designed for embedded use. It’s widely used in game development and other applications due to its simplicity and flexibility.

## Variables

**Defining Variables**

In Lua, you can define variables using the `local` keyword for local variables or directly for global variables.

```lua
local myVariable = 10
```

Variables defined without `local` are considered to be "global" variables.

```lua
myVariable = 10
```

**Note:** It’s good practice to use `local` whenever possible to avoid unintended interactions with other parts of the code.

## Data Types

Lua supports several data types:

**Numbers:** Represent integers or foating-point numbers.

```lua
local num1 = 10       -- integer
local num2 = 10.5     -- floating-point number
```

**Strings:** Text data enclosed in single or double quotes.

```lua
local str1 = 'Hello'
local str2 = "World"
```

**Booleans:** Represent `true` or `false`.

```lua
local isTrue = true
local isFalse = false
```

**Tables:** Lua’s primary data structure, used for arrays, dictionaries, and objects.

```lua
local myTable = {1, 2, 3}           -- Array-like table
local myDict = {key = "value"}      -- Dictionary-like table
```

## Control Structures

**If-Else Statements:**

```lua
local age = 15

if age < 18 then
    print("You are a minor.")
elseif age < 60 then
    print("You are an adult.")
else
    print("You are a senior.")
end
```

**Loops:**

- **For Loop:**

```lua
for i = 1, 5 do
print(i) -- Prints numbers from 1 to 5
end
```

- **While Loop:**

```lua
local count = 1
while count <= 5 do
  print(count)
  count = count + 1
end
```

## Functions

Functions in Lua are defined using the `function` keyword and can be assigned to variables.

**Defining a Function**

```lua
local function greet(name)
    return "Hello, " .. name
end

print(greet("Alice"))   -- Output: Hello, Alice
```

**Function with Multiple Parameters**

```lua
local function add(a, b)
    return a + b
end

print(add(5, 3))   -- Output: 8
```

**Anonymous Functions**

```lua
local square = function(x)
    return x * x
end

print(square(4))   -- Output: 16
```

## Tables and Metatables

**Creating a Table**

```lua
local person = {
    name = "John",
    age = 30
}

print(person.name)   -- Output: John
```

**Adding Methods to a Table**

```lua
local person = {
    name = "John",
    age = 30,
    greet = function(self)
        return "Hello, my name is " .. self.name
    end
}

print(person:greet())   -- Output: Hello, my name is John
```

**Metatables**

Metatables allow you to define custom behavior for tables. For example, you can create a metatable to define how tables are added together.

```lua
local mt = {
    __add = function(t1, t2)
        return t1.value + t2.value
    end
}

local t1 = {value = 10}
local t2 = {value = 20}
setmetatable(t1, mt)
setmetatable(t2, mt)

print(t1 + t2)   -- Output: 30
```

## Error Handling

**Pcall (Protected Call)**

```lua
local function safeDivide(a, b)
    if b == 0 then
        return nil, "Cannot divide by zero"
    else
        return a / b
    end
end

local success, result = pcall(safeDivide, 10, 0)
if success then
    print(result)
else
    print("Error:", result)
end
```

## Conclusion

Lua’s simplicity and flexibility make it an excellent choice for introducing programming concepts to students. By learning how to define variables, control structures, and functions, students can begin to create their own interactive projects and games.
