import styled from "@emotion/styled";
import { css } from "@emotion/css";

const ChildDetailContainer = css`
.content {
margin-top: 40px;
}
h1 {
margin: 0;
}
.studios {
margin-bottom: 30px;
}
.romaji {
margin: 0;
}
span {
text-transform: Capitalize;
}
.header .img-banner {
width: 100%;
height: 200px;
background: #f2f2f2;
position: relative;
overflow: hidden;
border-radius: 15px;
}
.header .img-banner img {
object-fit: cover;
height: 100%;
width: 100%;
}
.col-8 {
padding: 40px;
}
.img-detail img {
object-fit: cover;
height: 100%;
width: 100%;
border-radius: 15px;
}
`
export default function Desktop({ data, status }) {
  const {
    base_experience,
    stats,
    types,
    name,
  } = data;
  console.log(data, "DATAAA")
  return (
    <>
      <div className={`container ${ChildDetailContainer}`}>
      {status === "loading" && "Loading..."}
        {status === "success" && (<div className="col-12">
          <div className="content grid">
            <div className="description col-12">
              <span className="title">
                <h1>{name}</h1>
              </span>
              <span className="format">
                <p>
                base_experience : {base_experience}
                </p>
              </span>
              <span className="episodes">
                <p>
                stats : {JSON.stringify(stats)}
                </p>
              </span>
              <span className="status">
                <p>
                types : {JSON.stringify(types)}
                </p>
              </span>
            </div>
          </div>
        </div>)}
      </div>
    </>
  );
}
