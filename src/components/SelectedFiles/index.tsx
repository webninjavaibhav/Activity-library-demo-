import { Badge } from "@mui/material";
import Icons from "../common/Icons";

type previewProp = {
  acceptedFiles : any,
  isDeletable?: boolean,
  deleteFile: (e: any) => void | undefined,
}

const SelectedFiles = ({ acceptedFiles = false , isDeletable , deleteFile}: previewProp) => {
  if(acceptedFiles){
    return null
  } 
  return (
    <div className="flex p-2 overflow-auto">
      {acceptedFiles.map((file: any) => {
        let url = URL.createObjectURL(file);
        return (
          <Badge className="m-2" key={file.path} badgeContent={isDeletable ? <Icons.cancel onClick={()=>deleteFile(file)} fontSize="medium"  style={{ color: '#8b8b8b' , cursor:"pointer" }}  /> : null} >
            <div
              className="border-2 rounded-md w-[120px] h-[60px] relative"
              style={{
                backgroundImage: `url(${url})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-2">
                <div className="text-wrap">{file.path}</div>
              </div>
            </div>
          </Badge>
        );
      })}
    </div>
  );
};

export default SelectedFiles;
