import React, { useEffect, useState } from "react";
import Avatar from "@components/Avatar";
import PostCard from "@components/PostCard";
import Layout from "@components/Layout";
import Card from "@components/Card";
import { postService } from "../../services";
import Alert from "@components/Alert";
import { useModal } from "../../hooks";

function PostFormPage() {
  const [user, setUser] = useState();
  const [content, setContent] = useState("");
  const [fileGambar, setFileGambr] = useState(null);
  const [request, setRequest] = useState({
    title: "",
    summary: "Summary react",
    content: ""
  })
  const [show, toggle] = useModal()
  const onChangeFile = (e) => {
    const { files } = e.target
    if (!files) return
    setFileGambr(files[0])
  }
  const onChangeTesk = (e) => {
    setRequest(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }
  const createPost = async (e) => {
    e.preventDefault()
    try {
      const formData = new FormData()
      formData.append("title", request.title)
      formData.append("summary", request.summary)
      formData.append("content", request.content)
      formData.append("file", fileGambar)
      const resp = await postService.createPost(formData)
      toggle()
    }
    catch (e) {
      console.log(e)
    }
  }
  useEffect(() => {
    //Grap Profile user pic
    // alert(`Hello ${user}`);
  }, []);
  return (
    <div>
      <Layout>
        <Card>
          <div className="flex gap-3">
            <Avatar url={""} />
            <form className="form-control w-full" onSubmit={(e) => createPost(e)}>
              <label className="label">
                <span className="label-text">Your Title idea</span>
              </label>
              <input
                // value={request.title}
                name="title"
                onChange={(e) => onChangeTesk(e)}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full mb-3"
                required
              />
              {/* <label className="input-group"> */}
                {/* <span>Upload</span> */}
                <input
                  type="file"
                  placeholder="add picture"
                  className="file-input file-input-bordered w-full"
                  onChange={onChangeFile}
                  required
                />
              {/* </label> */}
              <div className="card flex-shrink-0 w-full bg-base-100">
              <div className="">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Describe Your Idea</span>
                  </label>
                  <textarea
                    placeholder="Bio"
                    className="textarea textarea-bordered textarea-lg w-full"
                    name="content"
                    onChange={(e) => onChangeTesk(e)}
                    required
                  ></textarea>
                </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary" type="submit">Upload your idea !</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          
        </Card>
      </Layout>
      {
        show ? <Alert toggle={toggle} message={"Post created successfully"} type={"success"}/> : <></>
      }
    </div>
  );
}

export default PostFormPage;
