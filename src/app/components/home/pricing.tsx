function Pricing() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h1 className="md:text-5xl text-4xl font-semibold">
            Simple, Transparent Pricing
          </h1>
          <p className="text-lg text-gray-600 md:max-w-[720px] mx-auto mt-4">
            Choose the plan that fits your needs — upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Free */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-semibold text-center">Free</h3>
            <p className="text-3xl font-extrabold text-center my-4">$0</p>
            <ul className="flex-1 space-y-3 text-gray-700 mb-6">
              <li>Basic link management</li>
              <li>Limited customization</li>
              <li>Basic analytics</li>
              <li>Linkify branding</li>
            </ul>
            <button className="mt-auto cursor-pointer w-full bg-transparent text-black font-semibold py-2 px-4 border border-black rounded-lg">
              Get Started
            </button>
          </div>

          {/* Starter */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-semibold text-center">Starter</h3>
            <p className="text-3xl font-extrabold text-center my-4">
              $6<span className="text-base font-medium">/mo</span>
            </p>
            <ul className="flex-1 space-y-3 text-gray-700 mb-6">
              <li>Unlimited links</li>
              <li>Custom theme colors</li>
              <li>Advanced analytics</li>
            </ul>
            <button className="mt-auto cursor-pointer w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg">
              Start Free Trial
            </button>
          </div>

          {/* Pro - recommended */}
          <div className="bg-gradient-to-tr from-blue-50 to-white rounded-2xl p-6 shadow-md border border-blue-100 flex flex-col relative">
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
              <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                Recommended
              </span>
            </div>
            <h3 className="text-xl font-semibold text-center mt-6">Pro</h3>
            <p className="text-3xl font-extrabold text-center my-4 text-gray-900">
              $12<span className="text-base font-medium">/mo</span>
            </p>
            <ul className="flex-1 space-y-3 text-gray-700 mb-6">
              <li>Everything in Starter</li>
              <li>Priority support</li>
              <li>Custom domain & branding</li>
              <li>Monetization tools</li>
            </ul>
            <button className="mt-auto cursor-pointer w-full bg-black text-white font-semibold py-2 px-4 rounded-lg">
              Choose Pro
            </button>
          </div>

          {/* Enterprise */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col">
            <h3 className="text-xl font-semibold text-center">Enterprise</h3>
            <p className="text-3xl font-extrabold text-center my-4">Contact</p>
            <ul className="flex-1 space-y-3 text-gray-700 mb-6">
              <li>Custom agreements</li>
              <li>Dedicated account manager</li>
              <li>Bulk onboarding & SSO</li>
            </ul>
            <button className="mt-auto cursor-pointer w-full bg-transparent text-black font-semibold py-2 px-4 border border-black rounded-lg">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
