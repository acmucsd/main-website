import { Html, Head, Main, NextScript } from 'next/document'
import { FULLSTORY_ANALYTICS_SCRIPT_CODE, GOOGLE_ANALYTICS_SCRIPT_CODE } from 'src/utils/analytics'

export default function Document() {
	return (
		<Html>
			<Head>
				{/* Global Site Tag (gtag.js) - Google Analytics */}
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				/>

				<script dangerouslySetInnerHTML={{ __html: GOOGLE_ANALYTICS_SCRIPT_CODE, }} />
				<script dangerouslySetInnerHTML={{ __html: FULLSTORY_ANALYTICS_SCRIPT_CODE }} />
			</Head>
			<body>

				<Main />
				<NextScript />
			</body>
		</Html>
	)
}