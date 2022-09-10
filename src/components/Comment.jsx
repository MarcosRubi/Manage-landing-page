import user1 from "../assets/images/avatar-anisha.png";
import user2 from "../assets/images/avatar-ali.png";
import user3 from "../assets/images/avatar-richard.png";
import user4 from "../assets/images/avatar-shanai.png";

function Comment({ comments }) {
    let urlImage = ''
    return (
        <>
            {comments.map((comment, key) => {
                switch (comment.img) {
                    case "user1":
                        urlImage = user1;
                        break;
                    case "user2":
                        urlImage = user2;
                        break;
                    case "user3":
                        urlImage = user3;
                        break;
                    default:
                        urlImage = user4
                        break;
                }
                const id = "comment-" + key;
                let classNames = "comment text-center py-3";
                key === 0 ? (classNames += " show") : "";
                return (
                    <ul key={key} className={classNames} id={id}>
                        <li className="comment-img">
                            <img src={urlImage} alt="" />
                        </li>
                        <li className="comment-name">{comment.name}</li>
                        <li className="comment-comment mx-auto">
                            {comment.comment}
                        </li>
                    </ul>
                );
            })}
        </>
    );
}

export default Comment;
