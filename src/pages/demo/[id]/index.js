import styles from 'styles/demo.module.scss';
import { DemoContainer } from 'containers/Demo/DemoContainer';
import { useRouter } from 'next/router';
// import axios from 'axios';
import { setComments } from 'reducers/comments';
import { ErrorContainer } from 'containers/Error/ErrorContainer';
import { LoadingSpinner } from 'components/Loading';
import { useDispatch } from 'react-redux';

// export async function getStaticProps(context) {
//   const { id } = context.params;
//   const result = await axios
//     .get(`http://localhost:3000/api/demo/demo/${id}`)
//     .catch((error) => error && error.response && error.response.status);
//   const data = typeof (await result) === 'number' ? result : result.data;
//   return {
//     props: { data },
//   };
// }

// export async function getStaticPaths() {
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

export default function Demo({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const IsError = typeof data === 'number'; // 에러가 난 경우, 에러 코드만 data로 넘어옴.
  // 로딩 완료, 에러 아닌 경우
  if (!router.isFallback && !IsError) {
    // 댓글 setting
    if (data) {
      dispatch(setComments(data.comments));
    }
    return (
      <main className={styles.wrapper}>
        <DemoContainer postId={router.query.id} postData={data} />
      </main>
    );
  }
  // 로딩 중인 경우
  if (router.isFallback) {
    return (
      <main className={styles.wrapper}>
        <LoadingSpinner text="Loading ..." />
      </main>
    );
  }
  // 로딩은 완료했으나, 에러인 경우
  if (!router.isFallback && IsError) {
    return (
      <main className={styles.wrapper}>
        <ErrorContainer errorCode={data} />
      </main>
    );
  }
}

Demo.propTypes = {
  data: Object,
};
