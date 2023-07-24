import React from "react";
import { BsFillMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const New = () => {
  const data = [
    { name: "The Weeknd", listener: 22454655656, playCount: 123123123123 },
  ];
  return (
    <div className="flex flex-col justify-center items-center mt-20">
      <div>
        <BsFillMoonFill className="w-8 h-8 " />
      </div>

      <div className="flex justify-center items-center my-auto rounded-lg mt-4 bg-orange-400 text-white w-36  h-12 hover:bg-orange-500 from-slate-950">
        Top Artist List          
      </div>
      <div className="flex items-center justify-center rounded-lg bg-gradient-to-r from-orange-700 w-96 h-64 mt-3">
        <table style={{ borderCollapse: "collapse", width: "900px" }}>
          <thead>
            <tr>
              <th style={{ border: "0px solid pink, " }}></th>
              <th style={{ border: "0px solid pink" }}></th>
              <th style={{ border: "0px solid pink" }}></th>
              <th style={{ border: "0px solid pink" }}></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (

              <tr key={item.id}>
                <Link to={"/detail"}>
                <div className="flex justify-between space-between mt-4  ">
                  <td>
                    Artist:{" "}
                    <hr className="flex-col text-white-500 dark:text-white-400"></hr>{" "}
                    {item.name}{" "}
                  </td>

                  <div className=" flex flex-col  mb-5 ">
                    <td className="ml-5 ">Listener : {item.listener}</td>
                    <td> Playcount : {item.playCount}</td>
                  </div>
                </div>
                </Link>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default New;
