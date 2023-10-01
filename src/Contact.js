import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
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

  return (<Wrapper>
    <h2 className="common-heading">Contact</h2>

    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2546030954277!2d73.
    91420147465315!3d18.562556867891523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
    1!3m3!1m2!1s0x3bc2c147b8b3a3bf%3A0x6f7fdcc8e4d6c77e!2sPhoenix%20Marketcity%20-
    %20Viman%20Nagar!5e0!3m2!1sen!2sgh!4v1685534800953!5m2!1sen!2sgh" 
    width="100%" 
    height="400" 
    style={{border:0}}
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade"></iframe>

    <div className="container">
      <div className="contact-form">
        <form action="https://formspree.io/f/mrgvvnpr" 
        method="POST" 
        className="contact-inputs">
          <input 
          type="text" 
          placeholder="username" 
          name="username"
          required 
          autoComplete="off" />

          <input 
          type="email" 
          name="Email" 
          placeholder="Email" 
          autoComplete="off"
           />

          <textarea 
          name="Message" 
          cols="30" 
          rows="10" 
          required
          autoComplete="off" 
          placeholder="Enter your message" ></textarea>

          <input type="submit" value="Send" />
        </form>
      </div>
    </div>
  </Wrapper>);
};

export default Contact;
