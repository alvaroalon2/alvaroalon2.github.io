import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: 'alvaroalon2@gmail.com',
    href: 'mailto:alvaroalon2@gmail.com',
  },
  {
    social: 'github',
    link: 'alvaroalon2',
    href: 'https://github.com/alvaroalon2',
  },
  {
    social: 'linkedin',
    link: 'alvaro-alonso-casero',
    href: 'https://www.linkedin.com/in/alvaro-alonso-casero/',
  },
  {
    social: 'scholar',
    link: 'Alvaro Alonso Casero',
    href: 'https://scholar.google.com/citations?hl=en&user=lFKlH68AAAAJ',
  },
  {
    social: 'huggingface',
    link: 'alvaroalon2',
    href: 'https://huggingface.co/alvaroalon2'
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
       <p className={styles.line}>
       tag: <a>production</a>
        </p>
      <p className={styles.line}>
        <span>kostas</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
