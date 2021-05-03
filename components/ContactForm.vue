<template>
  <div class="container mx-auto px-16">
    <div class="w-full mx-auto md:max-w-sm lg:max-w-md">
      <form
        class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc5DkYy22ThllQGH6AW6unb2NwJqKvytKcK7CGMkzF036UBIA/formResponse"
      >
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="selectCategory"
          >
            種別【必須】
          </label>
          <select
            id="selectCategory"
            name="entry.725826341"
            class="appearance-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option></option>
            <option value="各種活動について">各種活動について</option>
            <option value="寄付について">寄付について</option>
            <option value="プロボノやインターンについて">
              プロボノやインターンについて
            </option>
            <option value="講演依頼">講演依頼</option>
            <option value="取材依頼">取材依頼</option>
            <option value="その他">その他</option>
          </select>
        </div>
        <div class="flex">
          <div class="mb-4 w-full mr-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="inputLastName"
            >
              お名前（姓）【必須】
            </label>
            <input
              id="inputLastName"
              name="entry.896613129"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="山田"
              required
            />
          </div>
          <div class="mb-4 w-full ml-2">
            <label
              class="block text-gray-700 text-sm font-bold mb-2"
              for="inputFirstName"
            >
              お名前（名）【必須】
            </label>
            <input
              id="inputFirstName"
              name="entry.1420828012"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="太郎"
              required
            />
          </div>
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="inputCompany"
          >
            会社名【任意】
          </label>
          <input
            id="inputCompany"
            name="entry.1666260960"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="株式会社 XXX"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="inputTel"
          >
            電話番号【必須】
          </label>
          <input
            id="inputTel"
            name="entry.2019384655"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="012-3456-7890"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="inputEmail"
          >
            Eメール【必須】
          </label>
          <input
            id="inputEmail"
            name="entry.653387606"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="npo-mottai@example.com"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="inputTitle"
          >
            件名【必須】
          </label>
          <input
            id="inputTitle"
            name="entry.627760766"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="XXX について"
            required
          />
        </div>
        <div class="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="inputContent"
          >
            本文【必須】
          </label>
          <input
            id="inputContent"
            name="entry.152237501"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            type="text"
            placeholder="本文を入力"
          />
        </div>
        <div class="">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick="postToGoogle()"
          >
            送信する
          </button>
          <p>※ 送信後Google Formsの完了画面に遷移します</p>
        </div>
      </form>
    </div>
  </div>
</template>
