'use client'
import { useEffect } from "react";


import {Popover, PopoverTrigger, PopoverContent} from "@nextui-org/popover";
import {Button} from "@nextui-org/button";
import EmojiPicker from "emoji-picker-react";
import { GrEmoji } from "react-icons/gr";

type Props = {
  getEmoji: (emojiObject: any, event: any) => void,
}

export default function App({getEmoji}: Props) {


  return (
    <Popover placement="bottom" showArrow={true}>
      <PopoverTrigger>
        <Button>
          <GrEmoji className={`text-2xl cursor-pointer`} />
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <EmojiPicker onEmojiClick={getEmoji} />
      </PopoverContent>
    </Popover>
  );
}
