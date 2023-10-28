import React, { useEffect, useState } from "react";
import Avatar from "@components/Avatar";
import PostCard from "@components/PostCard";
import Layout from "@components/Layout";
import Card from "@components/Card";
import { postService } from "../../services";

function PostFormPage() {
  const [user, setUser] = useState();
  const [content, setContent] = useState("");
  const [fileGambar, setFileGambr] = useState(null);
  const [request, setRequest] = useState({
    title: "",
    summary: "Summary react",
    content: ""
  })
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
      console.log(resp)
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
            <div className="form-control w-full">
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
              />
              {/* <label className="input-group"> */}
                {/* <span>Upload</span> */}
                <input
                  type="file"
                  placeholder="jpg/png"
                  className="file-input file-input-bordered w-full"
                  onChange={onChangeFile}
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
                  ></textarea>
                </div>

                  <div className="form-control mt-6">
                    <button className="btn btn-primary" onClick={createPost}>Upload your idea !</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </Card>
      </Layout>
    </div>
  );
}

export default PostFormPage;
