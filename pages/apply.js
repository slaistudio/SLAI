import { useState } from 'react';

export default function Apply() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    // 將生日分成年/月/日傳送至 Google Form 拆開欄位
    data.append("entry.1823847231_year", form.year.value);
    data.append("entry.1823847231_month", form.month.value);
    data.append("entry.1823847231_day", form.day.value);

    const query = new URLSearchParams(data).toString();

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSeFYhwr0RmArANQTcJe6u6UJMaP-vEYhXOKzBzrHXY_AQtg9A/formResponse", {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: query,
    }).then(() => {
      setSubmitted(true);
    });
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
      <h1 className="text-3xl font-bold mb-6 text-center text-[#5b3a1d]">應徵表單</h1>
      {submitted ? (
        <div className="text-center text-green-600 text-xl">✅ 您的資料已送出，感謝填寫！</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-1">姓名</label>
            <input name="entry.2131071763" required className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">性別</label>
            <input name="entry.1182383951" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">出生年月日（西元）</label>
            <div className="flex space-x-2">
              <input name="year" placeholder="年" className="w-1/3 border rounded px-2 py-2" />
              <input name="month" placeholder="月" className="w-1/3 border rounded px-2 py-2" />
              <input name="day" placeholder="日" className="w-1/3 border rounded px-2 py-2" />
            </div>
          </div>
          <div>
            <label className="block mb-1">現職</label>
            <input name="entry.876058204" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">電話</label>
            <input name="entry.1658630109" className="w-full border rounded px-3 py-2" />
          </div>
          <div>
            <label className="block mb-1">社群 ID（微信或 LINE）</label>
            <input name="entry.1038710208" className="w-full border rounded px-3 py-2" />
          </div>
          <button type="submit" className="bg-[#5b3a1d] text-white px-6 py-2 rounded hover:bg-[#7e441f]">
            送出
          </button>
        </form>
      )}
    </div>
  );
}
