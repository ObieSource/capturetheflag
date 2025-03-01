import { SimpleLink } from "@/components/flagger";
import tree from './CTF-IMG-49F7.jpg';
import Image from "next/image";
import { HtmlComment } from "@/components/html-comment";

export default function Tree() {
    return (
      <div className="p-5">
        <h1 className="font-extrabold">Cherry trees</h1>
        <p className="p-5">The cherry blossom, or sakura, is the flower of trees in Prunus subgenus Cerasus. Sakura usually refers to flowers of ornamental cherry trees, such as cultivars of Prunus serrulata, not trees grown for their fruit (although these also have blossoms). Cherry blossoms have been described as having a vanilla-like smell, which is mainly attributed to coumarin.</p>
        <div className="lg:ml-16 mx-auto">
          <SimpleLink href="https://en.wikipedia.org/wiki/Cherry_blossom">from Wikipedia</SimpleLink><br></br>
          <Image 
              src={tree}
              alt="Photo Of A Tree"
              className="max-w-xs"
          />
          <SimpleLink href="https://commons.wikimedia.org/wiki/File:Sakura_and_Moss_Pink_-_%E6%A1%9C(%E3%81%95%E3%81%8F%E3%82%89)%E3%81%A8%E8%8A%9D%E6%A1%9C(%E3%81%97%E3%81%B0%E3%81%96%E3%81%8F%E3%82%89).jpg">Original image source</SimpleLink>
      </div>
      </div>
    );
  }
  