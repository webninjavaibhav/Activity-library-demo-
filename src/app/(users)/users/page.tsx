"use client";
import Icons from "@/components/common/Icons";
import { IconButton, LinearProgress, Tooltip } from "@mui/material";
import { columns, header } from "./constants/columns";
import useUsers from "./hooks/useUsers";
import CustomModal from "@/components/common/CustomModal";
import DeleteUser from "./Modals/DeleteUser";
import EditUser from "./Modals/EditUser";

const Users = () => {
  const {
    data,
    loading,
    error,
    openModal,
    handleModal,
    userInfo,
    setUserInfo,
    deleteUser,
    updateUserInfo,
    isFetching,
  } = useUsers();

  return (
    <div className="m-4">
      <div className="pb-4 flex items-center">
        <IconButton aria-label="delete">
          <Icons.rightArrow sx={{ rotate: "180deg" }} />
        </IconButton>
        <div className="mx-2 text-gray-900 font-semibold">Users</div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        {isFetching && <LinearProgress color="inherit" />}
        <table className="w-full text-sm text-left rtl:text-right text-gray-700 dark:text-gray-700">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-100">
            <tr>
              {header.map((header: string, i: number) => (
                <th
                  key={i}
                  scope="col"
                  className="px-6 py-4"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!loading &&
              !error &&
              data.map((e: any, i: number) => (
                <tr
                  key={i}
                  className="bg-white border-b"
                >
                  {columns.map((column: string) => {
                    if (column === "action") {
                      return (
                        <td
                          className="px-6 py-2 flex"
                          key={column.toString()}
                        >
                          <Tooltip title="Edit">
                            <IconButton
                              onClick={() => {
                                setUserInfo(e);
                                handleModal("edit");
                              }}
                              aria-label="edit"
                            >
                              <Icons.editNoteIcon />
                            </IconButton>
                          </Tooltip>

                          <Tooltip title="Delete">
                            <IconButton
                              onClick={() => {
                                setUserInfo(e);
                                handleModal("delete");
                              }}
                              aria-label="delete"
                            >
                              <Icons.delete sx={{ color: "red" }} />
                            </IconButton>
                          </Tooltip>
                        </td>
                      );
                    } else {
                      return (
                        <td
                          key={column.toString()}
                          className="px-6 py-4"
                        >
                          {e.profile[column]}
                        </td>
                      );
                    }
                  })}
                </tr>
              ))}
          </tbody>
        </table>
        {loading || error ? (
          <div className=" text-center p-10 m-10">
            {loading && <>Loading....</>}
            {error && "Something went wrong"}
          </div>
        ) : null}

        {openModal === "edit" && (
          <CustomModal closeModal={handleModal}>
            <EditUser
              user={userInfo}
              isLoading={isFetching}
              updateUser={updateUserInfo}
              closeModal={handleModal}
            />
          </CustomModal>
        )}

        {openModal === "delete" && (
          <CustomModal closeModal={handleModal}>
            <DeleteUser
              user={userInfo}
              isLoading={isFetching}
              deleteUser={deleteUser}
              closeModal={handleModal}
            />
          </CustomModal>
        )}
      </div>
    </div>
  );
};

export default Users;
