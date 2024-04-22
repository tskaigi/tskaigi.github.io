import { qaList } from "../lib/data";

export default function Qa({ categoryName }: { categoryName: string }) {
  return (
    <div className="my-8 md:px-10">
      {qaList.categories
        .filter((category) => category.name === categoryName)
        .map((category, index) => (
          <div key={index}>
            {category.questions.map((qanda, index) => (
              <div key={index}>
                <h3 className="my-4 border-primary text-base text-accent lg:text-2xl">
                  <span className="text-xl lg:text-3xl">Q: </span>
                  {qanda.question}
                </h3>
                <p>
                  <span className="text-lg text-primary lg:text-3xl">A: </span>
                  {qanda.answer}
                </p>
                <div className="divider divider-neutral"></div>
              </div>
            ))}
          </div>
        ))}
    </div>
  );
}
