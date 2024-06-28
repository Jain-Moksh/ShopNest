import styled from "styled-components";

const Contact = () => {

  return <Wrapper>

    <h2 className="common-heading">Contact Page</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.566478933288!2d72.82201901041208!3d18.994743982118877!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce8c6043c51b%3A0x469288721a1d52aa!2sPhoenix%20Palladium!5e0!3m2!1sen!2sin!4v1719570407452!5m2!1sen!2sin"
      width="98%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/xjkbbnbv" method="POST" className="contact-inputs">

          <input type="text" placeholder="username" name="username" required autoComplete="off" />

          <input type="email" name="email" placeholder="email" required autoComplete="off"  />

          <textarea placeholder="Enter Your Message" name="messages" cols="30" rows="10" autoComplete="off" required ></textarea>

          <input type="submit" value="SEND" />
        </form>
      </div>
    </div>

  </Wrapper>;
};

export default Contact;

const Wrapper = styled.section`
padding: 2rem 0 5rem 0;
text-align: center;

.container {
  margin-top: 6rem;

  .contact-form {
    max-width: 50rem;
    margin: auto;

    .contact-inputs {
      display: flex;
      flex-direction: column;
      gap: 3rem;

      input[type="submit"] {
        cursor: pointer;
        transition: all 0.2s;

        &:hover {
          background-color: ${({ theme }) => theme.colors.white};
          border: 1px solid ${({ theme }) => theme.colors.btn};
          color: ${({ theme }) => theme.colors.btn};
          transform: scale(0.9);
        }
      }
    }
  }
}
`;