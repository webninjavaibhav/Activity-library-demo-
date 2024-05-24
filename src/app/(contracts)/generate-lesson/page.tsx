"use client";
import Image from "next/image";
import { useDropzone } from "react-dropzone";
import ReactMarkdown from "react-markdown";
import { useState, useRef, useEffect, FormEvent } from "react";
import { Avatar, Chip } from "@mui/material";
import Icons from "@/components/common/Icons";
import Input from "@/components/common/Input";
import { Button } from "@/components/common/Button";
import UserImage from "../../../../public//images/userImage.jpeg";
import VirtualAssistance from "../../../../public//images/virtual_assistant.png";
import SelectedFiles from "@/components/SelectedFiles";

type msgProp = {
  role: string;
  content: string;
  files?: any;
};

const GenerateLesson = () => {
  const [files, setFiles] = useState<any[]>([]);

  const { acceptedFiles, open, getRootProps, getInputProps, inputRef } =
    useDropzone({
      noClick: true,
      noKeyboard: true,
      onDrop: (droppedFiles) => {
        setFiles((prevFiles) => [...prevFiles, ...droppedFiles]);
      },
    });

  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<msgProp[]>([
    { role: "assistant", content: "Hi there! How can I help?", files: [] },
  ]);

  const messageListRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  // Auto scroll chat to bottom
  useEffect(() => {
    if (messageListRef.current) {
      const messageList = messageListRef.current;
      messageList.scrollTop = messageList.scrollHeight;
    }
  }, [messages]);

  // Focus on input field
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.focus();
    }
  }, []);

  // Handle errors
  const handleError = () => {
    setMessages((prevMessages) => [
      ...prevMessages,
      {
        role: "assistant",
        content: "Oops! There seems to be an error. Please try again.",
        files: [],
      },
    ]);
  };

  const removeFile = (file: any) => {
    setFiles((prevFiles) => prevFiles.filter((f: any) => f !== file));
  };

  const removeAll = () => {
    setFiles([]);
  };

  // Handle form handlegenerate
  const handleGenerate = async (e: FormEvent) => {
    e.preventDefault();
    setUserInput("");

    if (userInput.trim() === "" || loading) {
      return;
    }

    setLoading(true);
    const context = [
      ...messages,
      { role: "user", content: userInput, files: files },
    ];
    setMessages(context);
    removeAll();

    const response = await fetch("/api/generate-lesson", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ messages: context }),
    });
    let res = await response.json();
    setLoading(false);

    if (res?.error) handleError();

    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "assistant", content: res?.data?.response, files: [] },
    ]);
  };

  return (
    <>
      <div className="h-full rounded-xl p-5">
        <main className="relative">
          <div className="text-center pb-2">
            <div className="font-bold text-lg">
              Empowered Lesson Plan Generator
            </div>
          </div>

          <div className="w-full bg-white rounded-lg p-4 overflow-hidden h-[88vh] pt-2 overflow-y-scroll flex justify-center items-center">
            <div
              ref={messageListRef}
              className="w-full overflow-y-scroll h-full pb-[200px] "
            >
              {messages.map((message, index) => {
                return (
                  <div key={index}>
                    <div className="flex p-2 justify-between">
                      <div className="flex gap-3">
                        {message.role === "assistant" ? (
                          <Avatar
                            sx={{
                              width: 24,
                              height: 24,
                            }}
                          >
                            <Image src={VirtualAssistance} alt="Assistant" />
                          </Avatar>
                        ) : (
                          <Avatar
                            sx={{
                              width: 28,
                              height: 28,
                            }}
                          >
                            <Image src={UserImage} alt="User" layout="fill" />
                          </Avatar>
                        )}
                        <div className="block max-w-[calc(100vw_-_290px)] ">
                          <ReactMarkdown className="mx-2">
                            {message.content}
                          </ReactMarkdown>
                          <SelectedFiles
                            acceptedFiles={message?.files}
                            deleteFile={removeFile}
                          />
                        </div>
                      </div>
                      {message.role === "assistant" && index ? (
                        <div className="flex gap-3">
                          <Icons.launch
                            onClick={() =>
                              window.open(
                                "https://rabodis.glide.page/dl/6471c6",
                                "_blank"
                              )
                            }
                            className="cursor-pointer"
                            sx={{ fontSize: 20, marginBottom: 0.3 }}
                          />
                          <Icons.copyIcon
                            className="cursor-pointer"
                            sx={{ fontSize: 20, marginBottom: 0.3 }}
                          />
                        </div>
                      ) : null}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="w-full bottom-[10px] absolute px-2">
            <SelectedFiles
              acceptedFiles={files}
              deleteFile={removeFile}
              isDeletable={true}
            />
            <form
              onSubmit={handleGenerate}
              className="w-full flex justify-center items-center"
            >
              <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} />
                <Icons.attachFileIcon
                  className="cursor-pointer"
                  onClick={open}
                  fontSize="medium"
                />
              </div>
              <Input
                value={userInput}
                placeholder="Enter message"
                handleInput={(e: React.BaseSyntheticEvent) =>
                  setUserInput(e.target.value)
                }
              />
              <Button
                type="submit"
                variant="contained"
                onClick={handleGenerate}
                className={`${
                  loading
                    ? "bg-red-500  hover:bg-red-500"
                    : "bg-[#12D3CF] hover:bg-[#12D3CF]"
                } cursor-pointer gap-1 min-w-0 w-[36px] h-[34px]`}
              >
                {loading ? (
                  <Icons.stopIcon sx={{ fontSize: 20, marginBottom: 0.3 }} />
                ) : (
                  <Icons.arrowUpIcon sx={{ fontSize: 20, marginBottom: 0.3 }} />
                )}
              </Button>
            </form>
          </div>
        </main>
      </div>
    </>
  );
};

export default GenerateLesson;
