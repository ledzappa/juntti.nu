import React from 'react';

class About extends React.Component {
  render() {
    return (
      <div class="row d-flex justify-content-center">
        <div class="col-md-8 col-sm-10">
          <h2>Hello there!</h2>
          <div class="content-bg-dark">
            <p class="text-justify">
              Welcome to my website (under construction). I'm a frontend
              developer with an interest in design and UX. My current toolbox
              consists of JavaScript/TypeScript, Angular8, HTML/CSS, jQuery,
              Bootstrap (among others). I'm always eager to learn more and to
              develop my skills. Occasionally I also make guest appearances at
              "the other side", perhaps writing some PHP and SQL. I strive to
              write easy-to-read, slick and maintainable code, to challenge
              myself and to surpass expectations.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;