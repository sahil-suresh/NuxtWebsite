<template>
    <div>
      <img
        src="@/assets/Wwdc/cubhub1.png"
        alt="Cub Hub Sim"
        class="hero"
      />
      <div class="inner-content">
        <h3 class="heading"><b>Cub Hub</b></h3>
        <p class="paragraph">
          Cub Hub is a passion project of mine that is meant to be an interactive game-ified platform for medical exam studying, complete with a built-in flashcard system, patient OSCE simulators and USMLE style case questions.  My hope is that my unique approach will help students prepare for their exams in both an engaging and alleviating way.
        </p>
      </div>
      <img src="@/assets/Wwdc/cubhub2.png" class="images" />
      <h6 class="subtitle">Cub Hub Interface</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Inspiration</b></h3>
        <p class="paragraph">
           The inspiration for Cub Hub stemmed from my own passion for enhancing accessibility to medical education and developing novel affordable tools that are competitive with current third-party products in the medical field.  Cub Hub integrates elements of cozy gaming from its Animal Crossing-inspired aesthetic to the underlying gacha game-based mechanics to provide a rewarding and immersive experience.
        </p>
      </div>
      <img src="@/assets/Wwdc/cubhub3.png" class="images" />
      <h6 class="subtitle">Interactive AI Study Companions</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Content</b></h3>
        <p class="paragraph">
          In Cub Hub, users can collect characters that serve as AI-driven study companions that assist them throughout case studies, OSCE simulations, and flashcard sessions. These companions serve as virtual mentors, offering hints, guidance, and explanations to enhance the learning process.
        </p>
        <p class="paragraph">
          Players earn **honeycombs**—the in-game currency—by answering questions correctly. These honeycombs can then be used to unlock and collect new companions, encouraging continuous learning and progression.
        </p>
        <p class="paragraph">
          Characters are voiced as well and initiate dynamic conversation with the user.  They can react to the user's choices and provide tailored feedback, thus creating a more personalized and interactive study environment.
        </p>
      </div>
      <img src="@/assets/Wwdc/cubhub4.png" class="images" />
      <h6 class="subtitle">Interactive AI Study Companions</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Store</b></h3>
        <p class="paragraph">
          The store operates off of gacha-style mechanics with a rotating selection of shop items and banners where users can redeem characters, themed notebooks, soundtracks and more.  This system enhances engagement, rewarding consistent studying with collectibles.
        </p>
      </div>
      <img src="@/assets/Wwdc/cubhub5.png" class="images" />
      <h6 class="subtitle">Bear Bazaar</h6>
      <div class="inner-content">
        <h3 class="heading"><b>Flashcard</b></h3>
        <p class="paragraph">
          The flashcard system is loosely based off of Anki however provides the added mechanic of competing against your AI study companion as an option.
        </p>
      </div>
      <img src="@/assets/Wwdc/cubhub6.png" class="images-full" />
      <h6 class="subtitle" style="padding-bottom: 30px">Flashcard System</h6>
    </div>
  </template>
  
  <style scoped>
  .hero {
    width: 100%;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid rgb(0, 0, 0, 0.1);
  }
  
  .images {
    width: 100%;
    height: auto;
    /* object-fit: cover; */
  }
  
  .images-full {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .video {
    width: 100%;
    height: 350px;
  }
  
  .subtitle {
    font-size: 12px;
    color: gray;
    text-align: center;
  }
  
  .heading {
    padding-bottom: 5px;
  }
  
  .inner-content {
    padding-top: 30px;
    padding-bottom: 30px;
  }
  
  h6,
  h3 {
    margin: 0;
    padding: 0;
  }
  </style>
  