import React, { useState } from "react";
import TagBox from "../TagBox";

import styled from "styled-components";

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const TagGrid = () => {
  const [tags] = useState([
    {
      id: 1,
      name: "Java",
      description:
        'Java (not to be confused with JavaScript, JScript or JS) is a general-purpose, platform-independent, statically typed, object-oriented programming language designed to be used in conjunction with the Java Virtual Machine (JVM). "Java platform" is the name for a computing system that has installed tools for developing and running Java programs. Use this tag for questions referring to the Java programming language or Java platform tools.'
    },
    {
      id: 2,
      name: "JavaScript",
      description:
        "JavaScript (not to be confused with Java) is a high-level, dynamic, multi-paradigm, object-oriented, prototype-based, weakly-typed, and interpreted language used for both client-side and server-side scripting. Its primary use is in the rendering and manipulation of web pages. Use this tag for questions regarding ECMAScript and its various dialects/implementations (excluding ActionScript and Google-Apps-Script)."
    },
    {
      id: 3,
      name: "C#",
      description:
        "C# (pronounced \"see sharp\") is a high level, statically typed, multi-paradigm programming language developed by Microsoft. C# code usually targets Microsoft's .NET family of tools and run-times, which include the .NET Framework, .NET Core and Xamarin among others. Use this tag for questions about code written in C# or C#'s formal specification."
    },
    {
      id: 4,
      name: "Python",
      description:
        "Python is a multi-paradigm, dynamically typed, multipurpose programming language, designed to be quick (to learn, to use, and to understand), and to enforce a clean and uniform syntax. Two similar but incompatible versions of Python are commonly in use, Python 2.7 and 3.x. For version-specific Python questions, add the [python-2.7] or [python-3.x] tag. When using a Python variant or library (e.g. Jython, PyPy, Pandas, Numpy), please include it in the tags."
    },
    {
      id: 5,
      name: "PHP",
      description:
        "PHP (PHP: Hypertext Preprocessor) is a widely used, high-level, dynamic, object-oriented and interpreted scripting language primarily designed for server-side web development."
    },
    {
      id: 6,
      name: "HTML",
      description:
        "HTML (Hypertext Markup Language) is the standard markup language used for structuring web pages and formatting content. HTML describes the structure of a website semantically along with cues for presentation, making it a markup language, rather than a programming language. HTML works in conjunction primarily with CSS and JavaScript, adding style and behavior to the pages. The most recent revision to the HTML specification is HTML5.2."
    },
    {
      id: 7,
      name: "CSS",
      description:
        "CSS (Cascading Style Sheets) is a representation style sheet language used for describing the look and formatting of HTML (HyperText Markup Language), XML (Extensible Markup Language) documents and SVG elements including (but not limited to) colours, layout, fonts, and animations. It also describes how elements should be rendered on screen, on paper, in speech, or on other media."
    },
    {
      id: 8,
      name: "MySQL",
      description:
        "MySQL is a free, open source Relational Database Management System (RDBMS) that uses Structured Query Language (SQL). DO NOT USE this tag for other DBs such as SQL Server, SQLite etc. Those are different DBs which all use their own dialects of SQL to manage the data."
    },
    {
      id: 9,
      name: "Node.js",
      description:
        "Node.js is an event-based, non-blocking, asynchronous I/O runtime that uses Google's V8 JavaScript engine and libuv library. It is used for developing applications that make heavy use of the ability to run JavaScript both on the client, as well as on server side and therefore benefit from the re-usability of code and the lack of context switching."
    }
  ]);

  return (
    <Grid>
      {tags.map(tag => (
        <TagBox key={tag.id} {...tag} />
      ))}
    </Grid>
  );
};

export default TagGrid;
