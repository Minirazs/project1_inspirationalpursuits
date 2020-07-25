# Background &amp; Aim of Project: Chef &amp; Grandson

The Chef &amp; Grandson website that I have created is a tribute to my dad who is a food enthusiast and experienced chef consultant with myriad experiences in setting up, running and managing of western cuisine restaurant chains. With disciples all over the world, he has chosen to retire two years ago to spend time with his beloved grandson (aka my son). Though he has retired, he is still passionate about cooking and experimenting new recipes.

This website and its related YouTube Channel serve as online assets where we hope to &#39;pass on his legacy of cooking&#39;, share his knowledge, inspire chefs, home cooks and his grandson to appreciate, learn and prepare simple yet delicious food for people that they care about.

All food content and media in this website and our YouTube Channel is solely created by us. The website gives an overview of the brand. It also shows our updates via social media feed, the popular and latest video recipe links and provides an avenue for collaboration via the contact box.

The practical ways of measuring the outreach of this project include an increase in social media followers e.g. YouTube subscribers, an increase in video viewership (in minutes), an increase in webpage visitors and increase in interactions of social media posts.

## UX

The overall aim is for the user to like the Chef &amp; Grandson brand and to interact with it by watching the video recipes in order to improve their cooking skills in Chinese and Fusion recipes, subscribing and following it on social media platforms. The site is meant to be intuitive and easy to manoeuvre.

To make the brand youthful, vibrant and creative, the main colours used in this site are red, white, orange and blue. Red and white are derived from the logo. Red represents dynamism, white represents simplicity, orange represents creativity, and blue represents coolness. Orange is a complementary colour to red and it is used on headings of each section. Blue is one of the Triad colours with red and is used on the hover links in the site. White is used for the background for the colourful videos and photographs from Instagram feeds to stand out. It lets the user immerse in viewing the video and social media content.

The fonts used pair well with one another and are clear to read. The fancy font, Pacifico, is used for headings and reader-friendly font, Roboto, is used for paragraphs. The Chinese font, Ma Shan Zheng, is used for Chinese paragraph in the About section. All the fonts used are close to the ones used in video content.

The wireframe (.pdf) is in the wireframe folder. The idea is to create a simple 1 pager with clear and enticing content to allow the user to navigate the site easily. The minified version of CSS is included to reduce file size. The extended version is in the CSS folder of the directory.

There are 3 main sections in the 1pager site – Recipe, About, Contact which are accessible by the nav bar. Firstly, the video recipe section with 8 embedded YouTube videos with commands that allow the user to control the viewing and if the user wants to view more videos, he can click on the in-video links to go to the brand&#39;s YouTube channel page in a new tab or the video&#39;s direct YouTube page. The videos are lined by 2 (2 columns, even number) along the site in the laptop mode so that when the screen size reduces in tablet or mobile phone mode, the videos will be automatically lined individually along the mode.

Secondly, under the About Us section, it talks about who the creators are and why they want to create the brand in English and Mandarin. Both languages are shown because the video recipes have English and Mandarin captions and text in order to capture a wider variety of audience.

The grouping of social media links and the embedded Instagram feed that is in the form of carousel will allow the user to conveniently access and follow all of the brand&#39;s social media pages. This increases brand engagement.

Thirdly, under the Contact Us section, it has a contact form that allows the user to send a message and give their contact details to the administrator of the brand.

User stories:

1. As a user who wants to learn cooking, I can watch the embedded videos and decide if I want to subscribe and save the video in my YouTube playlist after clicking the in-video link.
2. As a user who is new to the brand and curious about the background and creators of the brand, I can read the About Us section and watch its videos to have a sense of whether I would like to follow it.
3. As a user who is proficient in Mandarin but poor in English, I can watch the video content with Chinese captions and read the Chinese text in the About Us section.
4. As a user who wants to follow and interact with the brand&#39;s Facebook, Instagram and YouTube pages for updates, I can access them by clicking the social media icons under About Us section or the embedded Instagram feed.
5. As a user who wants to contact or collaborate with the brand, I can fill in and submit the contact form under Contact Us section.
6. As a user who wants to subscribe to the brand&#39;s YouTube channel, I can click on &#39;Subscribe&#39; button in the banner.

## Features

- Nav bar in the banner – when the mouse is hovered over the links, the colour of the links will turn blue. When the link is clicked, it will lead the user to the corresponding section in the site.
- YouTube subscribe button in the banner – when clicked, the user immediately subscribes to the brand&#39;s YouTube channel.
- Embedded YouTube videos in Recipe section – the user can control in the video player when to play, pause, fast-forward or adjust the volume. Link to the YouTube channel is also available.
- Social media icons in About Us section – the user can view the respective social media page (Facebook, YouTube, Instagram) in a new tab.
- Embedded Instagram feed in About Us section – the user can view the brand&#39;s posts in the carousel. The carousel automatically switches the posts every few seconds. Once a post is clicked on, it will expand for an enlarged view. It is also linked to its original post and will open in a new tab.
- Contact form – the user can send a message, when valid fields are filled, to the brand&#39;s administrator.
- All the links and images – when hovered over, the links appear in blue. When the cursor is stopped and hovered over the object for a few seconds, text (in title) appears to describe it.
- Scroll-up button – once clicked, the site will bring the user back to the top of the page.
- Mobile responsive – when device and screen size changes, the elements in the site change to optimize user&#39;s viewing experience.

### Features Left to Implement

- CSS styling - Animate the logo in the banner and the other objects upon scrolling
- Having a database to filter and search for recipes
- Sharing personal recipes of the user to the site or even personal photos to showcase his end results in cooking
- Having an e-commerce platform for purchase of pre-order food items made by Grandpa Chef
- Automatic sending of an email as acknowledgement of message successfully sent to the administrator

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
- Curator.io v2.0
  - The Instagram feed in the form of carousel under the About Us section is aggregated by this tool. It is a quick and simple way of displaying Instagram feed nicely in the site.
- [Recordit](https://recordit.co/)
  - This software is used in recording screencast and saving it as GIF
- [Font Awesome v5.0.0](https://fontawesome.com/)
  - The chevron icon used in the scroll-up button is from Font Awesome
- Google Font
  - Fonts used – Roboto, Pacifico, Ma Shan Zheng
- Visual Studio Code (VSC) and its extensions like Live Server and Prettier
- Github
- Adobe Creative Suite – UX, Photoshop, Illustrator, Premiere Pro
  - All the content, including the logo, photos, videos, and the site&#39;s wireframe are created and edited using the Adobe Creative Suite.

## Testing

The initial testing phase was to put the HTML code and CSS code through the _W3C and Jigsaw validator_ tools to check for and rectify issues until there is no issue to be concerned about.

Next, using the browser&#39;s _Inspect tool_ and _Live Server extension_ on VSC to preview the site ensures that the site is mobile responsive and all content, such as video banner, buttons and links, is correctly and clearly displayed on different screen sizes, namely mobile (below 480px), tablet (between 768px to 1024px) and laptop (above 1024px):

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

These steps are repeated in the testing on three major web browsers, Chrome, IE Edge and Firefox:

1. Manually pressing and testing all the buttons and external links open a new tab and lead to the correct destination.
2. The internal hyperlink leads to the correct section of the site, total there are 3 sections: Video Recipes, About Us and Contact Us
3. All the embedded YouTube videos and its audio only play upon the user&#39;s control
4. The Instagram feed&#39;s links lead properly to the correct destination and they display the correct feed
5. Pressing the scroll-up button leads the user back to the top of the page
6. Filling up the Contact Us form and testing it with incorrect inputs and correct inputs to see if desired results appear:
  - Click the &#39;Contact&#39; hyperlink in the navbar to reach the Contact Us form at the bottom of the page
  - Required fields need to be filled before the form can be submitted. Error message appears and prevent the form from being submitted when the required field is not filled.
  - When an invalid email address is entered, error message appears to ask user to enter a valid email address with &#39;@&#39; before the form can be submitted.
  - Only when all required fields have been input correctly, the form can be submitted.

## Deployment

The project is deployed using GitHub Pages and found at this link: [https://github.com/Minirazs/project1\_inspirationalpursuits](https://github.com/Minirazs/project1_inspirationalpursuits). The site is automatically updated when new commits are pushed to the master branch.

The code of the site can be run locally in your computer by either downloading this repository, or cloning it from the GitHub repository. The code can be run by integrated development environment (IDE) such as VSC.

If you want to download the code, you can click on the green &#39;Code&#39; button in the link and download it as ZIP file. Once it is unzipped, the files such as index.html can be opened and run in IDE like VSC.

If you want to clone the files, you can click on the green &#39;Code&#39; button, copy the URL and paste it in your IDE for cloning them in your computer. After which break the connection with this Github repository, by enter &#39;git remote rm origin&#39; in your terminal.

## Credits

### Tools &amp; Tech used

I thank the developers for sharing freely their code and tools that are used in this site creation. They are listed in the Technologies section above.

### Acknowledgements

I received inspiration for this project from my dad, Grandpa Chef. I consulted him on the creation of the brand&#39;s original content.