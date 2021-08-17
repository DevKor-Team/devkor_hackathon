import styles from 'styles/components/comment/commentList.module.scss';
import CommentCard from 'components/Comment/CommentItem';
import PropTypes from 'prop-types';

export const CommentList = (props) => {
  const { comments } = props;

  return (
    <div className={styles.container}>
      {comments.length > 0 ? (
        comments.map((comment, id) => {
          return <CommentCard data={comment} id={id} />;
        })
      ) : (
        <p> 첫 댓글의 주인공이 되어주세요! </p>
      )}
    </div>
  );
};

export default CommentList;

CommentList.propTypes = {
  comments: PropTypes.objectOf({
    id: PropTypes.number,
    demo: PropTypes.number,
    content: PropTypes.string,
    writer: PropTypes.number,
    updated_at: PropTypes.string,
    created_at: PropTypes.string,
  }),
};
