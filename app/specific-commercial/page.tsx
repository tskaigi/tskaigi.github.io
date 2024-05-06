import { NavigateAnchorOnFirstRender } from "../functional/navigate-anchor-on-first-render";
import Container from "../ui/container";

export default function SpecifitCommercialTopPage() {
  return (
    <>
      <NavigateAnchorOnFirstRender />
      <Container>
        <h2 className=" text-2xl font-bold">特定商取引法に基づく表記</h2>
        <table className="table w-full">
          <tr>
            <td>販売業者</td>
            <td>一般社団法人TSKaigi Association</td>
          </tr>
          <tr>
            <td>所在地</td>
            <td>東京都中央区東日本橋2-4-10 701</td>
          </tr>
          <tr>
            <td>メールアドレス</td>
            <td>info@tskaigi.org</td>
          </tr>
          <tr>
            <td>電話番号</td>
            <td>請求があったら遅滞なく開示します</td>
          </tr>
          <tr>
            <td>運営統括責任者</td>
            <td>竹下義晃</td>
          </tr>
          <tr>
            <td>販売価格</td>
            <td>
              <a className=" text-yellow-100" href="https://client.eventhub.jp/ticket/VjqcjZK60">
                チケット販売ページ
              </a>
              をご確認ください。
            </td>
          </tr>
          <tr>
            <td>受け付け可能な決済手段</td>
            <td>クレジットカード</td>
          </tr>
          <tr>
            <td>代金の支払時期</td>
            <td>
              ご利用のクレジットカードの締め日や契約内容により異なります。ご利用されるカード会社までお問い合わせください。
            </td>
          </tr>
          <tr>
            <td>引渡時期</td>
            <td>2024/5/11 TSKaigi2024</td>
          </tr>
          <tr>
            <td>交換および返品（返金ポリシー）</td>
            <td>
              お客様都合により参加をキャンセルする場合は、EventHub上からキャンセルください。所定の手数料を引いたうえでご返金いたします。
            </td>
          </tr>
          <tr>
            <td>追加手数料等の追加料金</td>
            <td>
              ※なお、インターネット接続料金その他の電気通信回線の通信に関する費用はお客様にて別途ご用意いただく必要があります（金額は、お客様が契約した各事業者が定める通り）。
            </td>
          </tr>
        </table>
      </Container>
    </>
  );
}
