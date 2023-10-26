"use client";
import {
  addUser,
  deleteUser,
  updateUser,
} from "@/context/slice";
import React, {
  useEffect,
  useState,
} from "react";
import {
  useDispatch,
  useSelector,
} from "react-redux";

const page = () => {
  const [name, setName] = useState("");
  const [users, setUsers] = useState(
    [],
  );
  const dispatch = useDispatch();
  const userState: any = useSelector(
    (state: any) => state.users,
  );
  useEffect(() => {
    setUsers(userState);
  }, [userState]);

  const handleAddUser = (e: {
    preventDefault: () => void;
  }) => {
    e.preventDefault();
    console.log("name", name);
    dispatch(addUser(name));
    setName("");
  };

  return (
    <div className="w-80 text-center">
      Example page
      <form
        onSubmit={handleAddUser}
        className="flex flex-col m-5"
      >
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          className="col-md-4 border-solid border-red-950 "
        ></input>
        <button
          type="submit"
          className="col-md-4"
        >
          Add
        </button>
      </form>
      <div className="m-5">
        <ul>
          {users?.length > 0 &&
            users?.map(
              (user: any, index) => (
                <li key={index}>
                  <input
                    type="text"
                    defaultValue={user.name}
                    onChange={(e) => {
                      console.log("updatename", e.target.value)
                      dispatch(updateUser({
                        id: user.id,
                        name: e.target.value
                      }))
                    }}
                  ></input>
                  <button
                    className="text-xs text-red-500 mx-6"
                    onClick={() =>
                      dispatch(
                        deleteUser(
                          user.id,
                        ),
                      )
                    }
                  >
                    delete
                  </button>
                </li>
              ),
            )}
        </ul>
      </div>
    </div>
  );
};

export default page;
