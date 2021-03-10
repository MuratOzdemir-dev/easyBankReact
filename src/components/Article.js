import React from "react";
import ArticleCard from "./ArticleCard";

export default function Article() {
  return (
    <section className="article">
      <div className="article__head">
        <h2>Latest Articles</h2>
      </div>
      <div className="article__container">
        <ArticleCard
          imgUrl="/images/image-currency.jpg"
          author="By Claire Robinson"
          title="Receive money in any currency with ne fees"
          text="The world is getting smaller and we're becoming more mobile. So why
            should you be forced to only receive money in a single..."
        />
        <ArticleCard
          imgUrl="/images/image-restaurant.jpg"
          author="By Wilson Hutton"
          title="Treat yourself without worrying about money"
          text="Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …"
        />
        <ArticleCard
          imgUrl="/images/image-plane.jpg"
          author="By Wilson Hutton"
          title="Take your Easybank card wherever you go"
          text="We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …"
        />
        <ArticleCard
          imgUrl="/images/image-confetti.jpg"
          author="By Claire Robinson"
          title="Our invite-only Beta accounts are now live!"
          text="After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site …"
        />
      </div>
    </section>
  );
}
