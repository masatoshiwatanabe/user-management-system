// components/parts/CustomCard.stories.tsx

import type { Meta, StoryObj } from "@storybook/react";
import CustomCard from "./CustomCard";
import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";

const meta: Meta<typeof CustomCard> = {
  title: "Components/Parts/CustomCard",
  component: CustomCard,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CustomCard>;

export const Default: Story = {
  args: {
    title: "カードタイトル",
    description: "これはカスタムカードの説明です。",
    actions: (
      <>
        <Button size="small" variant="contained" color="primary">
          アクション1 (Action 1)
        </Button>
        <Button size="small" variant="contained" color="error">
          アクション2 (Action 2)
        </Button>
      </>
    ),
  },
};

export const WithoutActions: Story = {
  args: {
    title: "アクションなしのカード",
    description: "アクションが含まれていないカードの説明。",
  },
};

export const imageCard: Story = {
  render: (args) => {
    const [catImage, setCatImage] = useState<string>("");
    const URL = "https://api.thecatapi.com/v1/images/search";
    useEffect(() => {
      fetch(URL)
        .then((response) => response.json())
        .then((data) => setCatImage(data[0].url))
        .catch((error) =>
          console.error("猫ちゃんの画像取得に失敗しました " + error)
        );
    }, []);
    return (
      <img
        src={catImage}
        alt="猫ちゃん"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    );
  },
};

export const LongText: Story = {
  render: (args) => (
    <Box
      sx={{
        maxHeight: 150,
        overflowY: "auto", 
        width: 500,
        p: 1,
      }}
    >
      <CustomCard {...args} />
    </Box>
  ),
  args: {
    title: "長い説明テキスト",
    description: `現代社会において、私たちの生活は便利さと快適さに囲まれていますが、一方で自然との関わりは徐々に希薄になりつつあります。四季折々の風景や気候の変化は、単なる美的体験だけでなく、人間の心身にさまざまな影響を与えます。春の柔らかな日差しは新しい始まりを象徴し、夏の強い日差しは活力をもたらします。秋の紅葉は物事の移ろいを教え、冬の静けさは内省の時間を提供します。このような自然のリズムに触れることで、私たちは日常の喧騒から一歩離れ、自分自身を見つめ直す機会を得られます。また、自然環境の変化は気候問題や生態系の保全と密接に関わっており、持続可能な社会の実現には、環境への理解と配慮が不可欠です。日々の生活の中で自然と向き合う意識を持つことは、心身の健康だけでなく、地球全体の未来にもつながります。`,
  },
};
export const StyledCard: Story = {
  args: {
    title: "カスタムスタイル",
    description: "背景色や影をカスタマイズしたカード。",
    style: {
      backgroundColor: "#ffeb3b",
      border: "2px solid #f44336",
      boxShadow: "0 4px 12px rgba(0,0,0,0.25)",
    },
  },
};
