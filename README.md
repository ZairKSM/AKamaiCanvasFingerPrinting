
# Akamai Canvas Fingerprints

### Introduction

This repositories show how Akamai use the javascript canvas API to generate fingerprints to know which browser and GPU you are using based on the generation method used by your computer.

First of all Akamai is an antibot solution used in many website to avoid bot attacks, analyse traffic and allows only real users to navigate on the website.

Akamai is a client based script who send information to a server which with a huge database and an IA analysis to determine if you are a bot.

The Akamai script is obsfucate to make it incomprehensible to humans but which gives the same result as the original script.

### Canvas FingerPrinting 

The canvas FingerPrinting is one method used to detect bots, it generate a same image for everyone but when you convert it to Base 64 URL it change which depends of the Browser/Browser version and GPU 

![image](https://user-images.githubusercontent.com/31575941/192380023-36dd3f32-72c6-4e6c-9bac-b6a441d45bd1.png)

<details>
<summary>Example 1: Chrome and Browser native GPU</summary>
<img src="https://user-images.githubusercontent.com/31575941/192379622-a56e84f9-774a-4051-9cac-c96abe6ebe5e.png">
</details>

<details>
<summary>Example 2: Chrome and Nvidia GTX 1660 SUPER</summary>
<img src="https://user-images.githubusercontent.com/31575941/192380871-0852c108-8788-4117-8a77-e475d6467634.png">
 </details>

