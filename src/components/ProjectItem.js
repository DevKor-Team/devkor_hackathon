import styles from 'styles/components/projectitem.module.scss';

const projectitemimg = '/images/components/ProjectItem/testImage.jpg';
const logo = 'images/containers/Navbar/devkor_logo.svg';

export const ProjectItem = () => {
  return (
    <div className={styles.projectitem__container}>
      <div className={styles.projectitem__imagewrapper}>
        <img src={projectitemimg} alt="devkor" />
      </div>
      <div className={styles.projectitem__tail}>
        <ul>
          <li> a</li>
          <li> b</li>
          <li> c</li>
        </ul>
        <img src={logo} alt="devkor" />
      </div>
    </div>
  );
};
export default ProjectItem;
