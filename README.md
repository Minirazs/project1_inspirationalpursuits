# Background &amp; Aim of Project: Chef &amp; Grandson

The [Chef &amp; Grandson website](https://minirazs.github.io/project1_inspirationalpursuits/) 👨‍🍳👶 that I have created is a tribute to my dad who is a food enthusiast and experienced chef consultant with myriad experiences in setting up, running, and managing western cuisine restaurant chains. With disciples all over the world, he has chosen to retire two years ago to spend time with his beloved grandson (aka my son). Though he has retired, he is still passionate about cooking and experimenting with new recipes.

This website and its related YouTube Channel serve as online assets where we hope to &#39;pass on his legacy of cooking&#39;, share his knowledge, inspire chefs, home cooks, and his grandson to appreciate, learn and prepare simple yet delicious food for people that they care about.

All food-related content and media such as videos and photographs on this website and our YouTube Channel are uniquely created by us. The website is to promote the brand. It also shows our updates via social media feed, the popular and latest video recipe links, and provides an avenue for collaboration via the contact box.

The practical ways of measuring the outreach of this project include an increase in social media followers e.g. YouTube subscribers, an increase in video viewership (in minutes), an increase in webpage visitors, and an increase in interactions of social media posts.

## UX

The overall aim is for the user to get to know the Chef &amp; Grandson brand, grow to like it by enjoying watching the video recipes to improve their cooking skills. Eventually, the user will subscribe and follow the brand on different social media platforms and will even want to collaborate with the brand. The website is meant to be intuitive and easy to manoeuvre; which is reflective of the video recipe&#39;s style and that is simple-to-follow.

## UI

To make the brand youthful, vibrant, and creative, the main colours used in this site are red, white, and orange. Red and white are derived from the logo. Red represents dynamism, white represents simplicity, and orange represents creativity. Orange is a complementary colour to red and it is used for headings of each section and as the hover link colour. White is used for the background for the colourful videos and photographs from Instagram feeds to stand out. It lets the user immerse in viewing the video and social media content.

The fonts used pair well with one another and are clear to read. The fancy font, Pacifico, is used for headings and reader-friendly font, Roboto, is used for paragraphs. The Chinese font, Ma Shan Zheng, is used for Chinese paragraph in the About Us section. All the fonts used are close to the ones used in video content.

The wireframe (.pdf) is in the [wireframe folder](https://github.com/Minirazs/project1_inspirationalpursuits/blob/master/wireframe/project1wireframe.pdf). The idea is to create a simple 1 pager with clear and enticing content to allow the user to navigate the site easily. The minified version of CSS is included to reduce file size. The extended version is in the CSS folder of the directory.

![](img/screen.gif)

There are 3 main sections in the 1pager site – Recipe, About, Contact which are accessible by the navbar. Firstly, the video recipe section with 8 embedded YouTube videos with commands that allow the user to control the viewing and if the user wants to view more videos, he can click on the in-video links to go to the brand&#39;s YouTube channel page in a new tab or the video&#39;s direct YouTube page. The videos are lined by 2 (2 columns, even number) along with the site in the laptop mode so that when the screen size reduces in tablet or mobile phone mode, the videos will be automatically lined individually along with the mode.

Secondly, under the About Us section, it talks about who the creators are and why they want to create the brand in English and Mandarin. The background of the creators adds legitimacy to the quality of the content. Both languages are shown because the video recipes have English and Mandarin captions and text to capture a wider variety of audiences.

The grouping of social media links and the embedded Instagram feed that is in the form of a carousel will allow the user to conveniently access and follow all of the brand&#39;s social media pages. This increases brand engagement.

Thirdly, under the Contact Us section, it has a contact form that allows the user to send a message and give their contact details to the administrator of the brand.

## User Stories

1. As a user who wants to learn cooking, I can watch the embedded videos and decide if I want to subscribe or save the video in my YouTube playlist after clicking the in-video link to the YouTube page.
2. As a user who is new to the brand and curious about the background and creators of the brand, I can read the About Us section and watch its videos to have a sense of whether I would like to follow it.
3. As a user who is proficient in Mandarin but poor in English, I can watch the video content with Chinese captions and read the Chinese text in the About Us section.
4. As a user who wants to follow and interact with the brand&#39;s Facebook, Instagram, and YouTube pages for new recipes, I can access them by clicking the social media icons under the About Us section or the embedded Instagram feed.
5. As a user who wants to contact or collaborate with the brand, I can fill in and submit the contact form under the Contact Us section.
6. As a user who wants to subscribe to the brand&#39;s YouTube channel, I can click on the &#39;Subscribe&#39; button in the banner.

## Features

- Navbar in the banner – when the mouse has hovered over the links, the colour of the links will turn orange. When the link is clicked, it will lead the user to the corresponding section on the site.
- YouTube subscribe button in the banner – when clicked, the user immediately subscribes to the brand&#39;s YouTube channel.
- Embedded YouTube videos in Recipe section – the user can control in the video player when to play, pause, fast-forward, or adjust the volume. The link to the YouTube channel is also available.
- Social media icons in About Us section – the user can view the respective social media page (Facebook, YouTube, Instagram) in a new tab.
- Embedded Instagram feed in the About Us section – the user can view the brand&#39;s posts in the carousel. The carousel automatically switches the posts every few seconds. Once a post is clicked on, it will expand for an enlarged view. It is also linked to its original post and will open in a new tab.
- Contact form – the user can send a message, when valid fields are filled, to the brand&#39;s administrator.
- All the links and images – when hovered over, the links appear in orange. When the cursor is stopped and hovered over the object for a few seconds, text (in the title) appears to describe it.
- Scroll-up button – once clicked, the site will bring the user back to the top of the page.
- Mobile responsive – when device and screen size changes, the elements in the site change to optimize the user&#39;s viewing experience.

### Features Left to Implement &amp; Future Plans

- CSS styling - Animate the logo in the banner and the other objects upon scrolling
- Having a database to filter and search for recipes
- Sharing personal recipes of the user to the site or even personal photos to showcase his results in cooking
- Having an e-commerce platform for the purchase of pre-order food items made by Grandpa Chef
- Automatic sending of an email to the user as an acknowledgment of message successfully sent to the administrator

## Technologies Used

- HTML5
- CSS3
- JavaScript
- [Bootstrap 4](https://getbootstrap.com/)
  - The project uses Bootstrap framework for basic, quick, customisable design codes and allows the site to be mobile responsive.
- [Favicon.io](https://favicon.io/favicon-converter/)
  - Favicon is created from this site.
- [Youtube API](https://developers.google.com/youtube/youtube_subscribe_button)
  - In the banner, there is a YouTube embedded subscription button which allows the users to subscribe directly to the channel. This allows for much quicker conversion.
- [Curator.io v2.0](https://curator.io/)
  - The Instagram feed in the form of a carousel under the About Us section is aggregated by this tool. It is a quick and simple way of displaying Instagram feed nicely in the site.
- [Font Awesome v5.0.0](https://fontawesome.com/)
  - The chevron icon used in the scroll-up button is from Font Awesome
- [Am I Responsive?](http://ami.responsivedesign.is/)
  - To check the mobile responsiveness of the site and create screen.gif
- [Minify](https://www.minifier.org/)
  - To minify the CSS code. Minified CSS is used to reduce file size.
- [Word to Markdown converter](https://word2md.com/)
  - To convert word doc to Markdown for use in readme
- [Google Font](https://fonts.google.com/)
  - Fonts used – Roboto, Pacifico, Ma Shan Zheng
- [Visual Studio Code (VSC)](https://code.visualstudio.com/) and its extensions like Live Server and Prettier
- [Github](https://github.com/)
- [Adobe Creative Suite](https://www.adobe.com/sea/creativecloud.html) – UX, Photoshop, Illustrator, Premiere Pro
  - All the content, including the logo, photos, videos, and the site&#39;s wireframe are created and edited using the Adobe Creative Suite.

## Testing

The initial testing phase was to put the HTML code and CSS code through the W3C and Jigsaw validator tools to check for and rectify issues until there is no issue to be concerned about.

Next, using the browser&#39;s Inspect tool and Live Server extension on VSC to preview the site ensures that the site is mobile responsive and all content, such as video banner, buttons, and links, is correctly and displayed on different screen sizes, namely mobile (below 480px), tablet (between 768px to 1024px) and laptop (above 1024px):

- iPad (portrait and landscape mode)
- iPad Pro (portrait and landscape mode)
- Kindle Fire (portrait and landscape mode)
- Galaxy S9/S9+
- iPhone X/XS
- iPhone 6/7/8
- iPhone 5/SE
- Pixel 2
- Moto G4
- Surface Duo
- Galaxy Fold

These steps are repeated in the testing on three major web browsers, Chrome, IE Edge, and Firefox:

1. Manually pressing and testing all the buttons and external links open a new tab and lead to the correct destination.
2. The internal hyperlink leads to the correct section of the site, total there are 3 sections: Video Recipes, About Us, and Contact Us.
3. All the embedded YouTube videos and their audio will only play upon the user&#39;s control.
4. The Instagram feed&#39;s links lead properly to the correct destination and they display the correct feed.
5. Pressing the scroll-up button leads the user back to the top of the page
6. Filling up the Contact Us form and testing it with incorrect inputs and correct inputs to see if desired results appear:
  1. Click the &#39;Contact&#39; hyperlink in the navbar to reach the Contact Us form at the bottom of the page
  2. Required fields need to be filled before the form can be submitted. An error message appears and prevents the form from being submitted when the required field is not filled.
  3. When an invalid email address is entered, an error message appears to ask the user to enter a valid email address with &#39;@&#39; before the form can be submitted.
  4. Only when all required fields have been input correctly, the form can be submitted.

## Deployment

The project is deployed using GitHub Pages for version controlling and is found at this link: [https://github.com/Minirazs/project1\_inspirationalpursuits](https://github.com/Minirazs/project1_inspirationalpursuits). The site is automatically updated when new commits are pushed to the master branch.

The code of the site can be run locally in your computer by either downloading this repository or cloning it from the GitHub repository. The code can be run by an integrated development environment (IDE) such as VSC.

If you want to download the code, you can click on the green &#39;Code&#39; button in the link and download it as a ZIP file. Once it is unzipped, the files such as index.html can be opened and run in IDE like VSC.

If you want to clone the files, you can click on the green &#39;Code&#39; button, copy the URL and paste it in your IDE for cloning them in your computer. There are [several ways to clone repositories on GitHub](https://docs.github.com/en/github/using-git/which-remote-url-should-i-use). After which break the connection with this GitHub repository, by entering &#39;git remote rm origin&#39; in your terminal.

## Credits

## Tools &amp; Tech used

I am thankful for the developers and tech creators for sharing freely their code and tools that are used in this site creation. They are listed in the Technologies section above. 🙌

## Acknowledgments
I received inspiration for this project from my dad, Grandpa Chef, and my son! 😃

## Content
All the videos, photographs, and unique recipes shown are original content created by Grandpa Chef &amp; myself. All rights reserved for our content. 🤩