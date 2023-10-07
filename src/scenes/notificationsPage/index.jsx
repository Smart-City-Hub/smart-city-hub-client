import Layout from "@components/Layout";
import Card from "@components/Card";
import React from "react";
import Avatar from "@components/Avatar";
import { Link } from "react-router-dom";

function NotificationsPage() {
  return (
    <div>
      <Layout>
        <Card>
          <div className="overflow-x-auto">
            <table className="table">
              <tbody>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Avatar />
                      <div>
                        <div className="font-bold">
                          <Link to="/profile" className="link link-hover">
                            Hart Hagerty
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Liked Your{" "}
                    <Link to="/" className="'link link-hover link-info">
                      Post
                    </Link>
                  </td>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Avatar />
                      <div>
                        <div className="font-bold">
                          <Link to="/profile" className="link link-hover">
                            Hart Hagerty
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Liked Your{" "}
                    <Link className="'link link-hover link-info">Post</Link>
                  </td>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Avatar />
                      <div>
                        <div className="font-bold">
                          <Link to="/profile" className="link link-hover">
                            Hart Hagerty
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Liked Your{" "}
                    <Link className="'link link-hover link-info">Post</Link>
                  </td>
                </tr>
                {/* row 1 */}
                <tr>
                  <td>
                    <div className="flex items-center space-x-3">
                      <Avatar />
                      <div>
                        <div className="font-bold">
                          <Link to="/profile" className="link link-hover">
                            Hart Hagerty
                          </Link>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Liked Your{" "}
                    <Link className="'link link-hover link-info">Post</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </Layout>
    </div>
  );
}

export default NotificationsPage;
