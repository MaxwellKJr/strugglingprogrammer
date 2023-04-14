---
title: Moving to Mobile Development
date: 2023-04-14T13:07:12.692Z
featuredImage: checking-out-mobile-dev.jpg
description: The struggle continues and I have made the painful yet satisfying
  choice to become a full-time mobile app developer. Wait, I am not done with
  Web Development but I will just put more focus in Mobile Development. And here
  is why.
tags:
  - Kotlin
  - Flutter
  - Native
  - Mobile Development
---
Web Development is like the Universe. It is vast and one can easily get lost in it with the overwhelming choices at their fingertips.

#### There is nothing wrong with Web Development

Since I started coding in 2017, I never thought I would become a Mobile App Developer. But I was certain that I wanted to write code and I won't say that if I were to start over then I would choose something different. No. I **DEFINITELY** would start with web development.

Web development remains to be the cheapest and most accessible way to get started with coding anyway. And to be frank, both software and mobile development do borrow a lot from web development. In fact, some people like web development so much that they decided to build everything (Desktop, Mobile, Web) with a single code base using web technologies (looking at you React, Electron, and React Native). That's how accessible web development is.

#### Then Why Move? 💁‍♂️

I actually thought mobile development was as difficult as game development. Yes, I will admit it sounds dumb saying that but that's what I thought.

So I was shocked to see that mobile development is not as hard as game development (unless the app is a game then... well 🤯).

Anyway, I won't deny that my web dev knowledge helped me significantly with learning mobile development. I actually started web development with React Native because of my knowledge of React.js. I was blown away and couldn't believe what my eyes were seeing. Running a Native app with web development knowledge was something I was both glad for and took time to accept. So I stopped. Yes. The Irony.

##### Mobile Development Course

Then the time came for me to learn mobile development whether I liked it or not. My Mobile Development 4th-year course played a huge part in persuading me to make the shift. It was the most fun and frustrating experience I have had while learning a course and man, it was **WORTH IT!**.

We were given the liberty to build the app of our choice with the technology of our choice: Native with Kotlin/Java or Hybrid with Flutter.

I chose Kotlin because of its `data class` feature and simplicity. I have nothing against Java (lies) but I wanted to expand my knowledge. Okay here is a side-by-side equivalent of user class in Kotlin and Java.

##### Kotlin User Class:

```
data class User(
    val id: Int,
    val name: String,
    val email: String,
    val age: Int
) {
    fun greet(): String {
        return "Hello, my name is $name!"
    }
    
    fun sendEmail(subject: String, message: String) {
        // Code to send email using email field
    }
}
```

Now here is the same class in Java 😢

##### Java User Class:

```
public class User {
    private int id;
    private String name;
    private String email;
    private int age;
    
    public User(int id, String name, String email, int age) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.age = age;
    }
    
    public String greet() {
        return "Hello, my name is " + name + "!";
    }

    public void sendEmail(String subject, String message) {
        // Code to send email using email field
    }
	
    // Getters and setters for private fields
    public int getId() {
        return id;
    }
 
    public void setId(int id) {
        this.id = id;
    }
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public String getEmail() {
        return email;
    }
  
    public void setEmail(String email) {
        this.email = email;
    }
	
	 public int getAge() {
        return age;
    }
}
``` 

Now you know why I chose Kotlin over Java. I really have nothing against Java and its code *legacy*.

But Kotlin is just a small part of why I chose it. As a developer who aims at creating visually appealing and welcoming user experiences, I feel like my skills will be best utilized and goals achieved at the same time with mobile development. With mobile development, one can easily become Full-Stack. I want to build apps that people can easily use and bond with by having them on their smartphones. I mean it doesn't get better than that. I want to build experiences that will make people say, "Yeah, I am going to pay for more features".

#### What does mobile development have that web development doesn't?

To explain this, I will have to divide this into the technical advantages and the personal advantages (monetization and all) but first, let's start with the former.

##### Advantages of Mobile Development (App Perspective)

1. Better Performance += Better User Experience
2. Accessibility
3. Ease-of-use (Depends on the app really)
4. Take Advantage of Hardware Resources

##### Advantages of Mobile Development (Developer's Perspective)

1. High Industry Demand for Mobile Developers
2. Better Salaries (Mostly but not always)
3. Easy to Monetize Apps
4. Narrower Manageable Technologies

Those are 8 advantages in total and for an in-depth analysis of each point check out my post [Why Mobile Development?](https://strugglingprogrammer.netlify.app/blog/why-mobile-development/)