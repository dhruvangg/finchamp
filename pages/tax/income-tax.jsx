/* eslint-disable react/no-unescaped-entities */
import { Container, Layout } from 'components/styled';
import Head from 'next/head'

export default function Taxation() {
    return (
        <Layout>
            <Head>
                <title>Income Tax | FinChamp</title>
                <meta name="description" content="Financial Awareness platform" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='page'>
                <section id='banner' className='my-8 md:my-16'>
                    <Container>
                        <h1 className='inline-block text-2xl font-semibold border-b-2 border-primary'>Income tax</h1>
                        <article className="prose lg:prose-xl mx-auto">
                            <p>In India, income tax is calculated using income tax slabs and rates for the applicable financial year (FY) and assessment year (AY). The income tax slab for AY 2023-24 was published as part of the Union Budget 2022-23.</p>
                            <h2><strong>Income Tax Slab</strong></h2>
                            <p>Individual taxpayers must pay income tax based on the slab system into which they fall. Individuals may fall into a different tax bracket depending on their Income. As a result, persons with higher incomes will have to pay more taxes.</p>
                            <p>The slab system was implemented to keep the country's tax system equitable. The slabs change with each budget announcement.</p>
                            <h2><strong>Income Tax Slab for FY 2023-24 (AY 2024-25)</strong></h2>
                            <p>The following tables show the Revised Income <a href="https://groww.in/p/tax">Tax</a> Slabs, not the old tax regime. These new tax slabs in India were presented in the Budget 2023. The table for the new tax regime slabs-</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Tax Slab</strong>
                                        </td>
                                        <td>
                                            <strong>Rates</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Up to Rs. 3,00,000
                                        </td>
                                        <td>
                                            NIL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 300,000 to Rs. 6,00,000
                                        </td>
                                        <td>
                                            5% on income which exceeds Rs 3,00,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 6,00,000 to Rs. 900,000
                                        </td>
                                        <td>
                                            Rs 15,000 + 10% on income more than Rs 6,00,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 9,00,000 to Rs. 12,00,000
                                        </td>
                                        <td>
                                            Rs 45,000 + 15% on income more than Rs 9,00,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 12,00,000 to Rs. 1500,000
                                        </td>
                                        <td>
                                            Rs 90,000 + 20% on income more than Rs 12,00,000
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Above Rs. 15,00,000
                                        </td>
                                        <td>
                                            Rs 150,000 + 30% on income more than Rs 15,00,000
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2><strong>Income Tax Slab for People Between 60 to 80 Years</strong></h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Tax Slabs</strong>
                                        </td>
                                        <td>
                                            <strong>Rates</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 3 lakhs
                                        </td>
                                        <td>
                                            NIL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 3 lakhs - Rs. 5 lakhs
                                        </td>
                                        <td>
                                            5.00%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 5 lakhs - Rs. 10 lakhs
                                        </td>
                                        <td>
                                            20.00%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 10 lakhs and more
                                        </td>
                                        <td>
                                            30.00%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2><strong>Income Tax Slab for People More than 80 Years</strong></h2>
                            <p>Below-mentioned is the Senior citizen <a href="https://groww.in/p/tax">tax</a> slab in detail-</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Tax Slabs</strong>
                                        </td>
                                        <td>
                                            <strong>Rates</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 0 - Rs. 5 lakhs
                                        </td>
                                        <td>
                                            NIL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 5 lakhs - Rs. 10 lakhs
                                        </td>
                                        <td>
                                            20.00%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Above Rs. 10 lakhs
                                        </td>
                                        <td>
                                            30.00%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2><strong>Tax Slabs for Domestic Companies</strong></h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Particulars</strong>
                                        </td>
                                        <td>
                                            <strong>Existing or Old Regime Tax Rates</strong>
                                        </td>
                                        <td>
                                            <strong>New Regime Tax Rates</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Company opts for section 115BAB (not covered in section 115BA and 115BAA) &amp; is registered on/after October 1, 2019 and has started manufacturing on/before 31st March 2023
                                        </td>
                                        <td>
                                            -
                                        </td>
                                        <td>
                                            15%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Company opts for Section 115BAA , where the total income of a company has been calculated without claiming specified deductions, exemptions, incentives, and additional depreciation
                                        </td>
                                        <td>
                                            -
                                        </td>
                                        <td>
                                            22%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Company opts for section 115BA registered on/after March 1, 2016, and is in the manufacture of any article or thing and does not claim a deduction as specified in the section
                                        </td>
                                        <td>
                                            -
                                        </td>
                                        <td>
                                            25%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Turnover/gross receipt of the company is less than Rs. 400 crores in the previous year
                                        </td>
                                        <td>
                                            25%
                                        </td>
                                        <td>
                                            25%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Other Domestic Company
                                        </td>
                                        <td>
                                            30%
                                        </td>
                                        <td>
                                            30%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <ul>
                                <li>
                                    <h4>Surcharge applicable for companies-</h4>
                                </li>
                                <ul>
                                    <li aria-level="2">
                                        <h4>7% of <a href="https://groww.in/p/tax/income-tax">Income tax</a> where total income is more than Rs 1 crore</h4>
                                    </li>
                                    <li aria-level="2">
                                        <h4>12% of Income tax where total income is more than Rs.10 crores</h4>
                                    </li>
                                    <li aria-level="2">
                                        <h4>10% of income tax where domestic company opted Section 115BAA and 115BAB</h4>
                                    </li>
                                </ul>
                            </ul>
                            <ul>
                                <li>
                                    <h4>Additional Health &amp; Education Cess Rate - 4%</h4>
                                </li>
                            </ul>
                            <h2><strong>Income Tax Rate for Partnership Firm or LLP as Per Old/New Regime</strong></h2>
                            <h4>A partnership firm or an LLP is taxable at 30%</h4>
                            <h4><strong>Note </strong>-</h4>
                            <ul>
                                <li>
                                    <h4>A Surcharge of 12% is levied on incomes above Rs 1 crore.</h4>
                                </li>
                                <li>
                                    <h4>Health and Education Cess Rate - 4 %</h4>
                                </li>
                            </ul>
                            <h2><strong>Income Tax Slab Rate for New Tax Regime</strong></h2>
                            <p>The HUF and Individual tax slab applicable are-</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <strong>Slab</strong>
                                        </td>
                                        <td>
                                            <strong>New Tax Regime</strong>
                                            <strong>(Before Budget 2023 - </strong><strong>until 31 March 2023)</strong>
                                        </td>
                                        <td>
                                            <strong>New Tax Regime</strong>
                                            <strong>(</strong><strong>After Budget 2023 - </strong><strong>From 01 April 2023)</strong>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 0 to Rs. 2,50,000
                                        </td>
                                        <td>
                                            NIL
                                        </td>
                                        <td>
                                            NIL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 2,50,000 to Rs. 3,00,000
                                        </td>
                                        <td>
                                            5%
                                        </td>
                                        <td>
                                            NIL
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 3,00,000 to Rs. 5,00,000
                                        </td>
                                        <td>
                                            5%
                                        </td>
                                        <td>
                                            5%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 5,00,000 to Rs. 6,00,000
                                        </td>
                                        <td>
                                            10%
                                        </td>
                                        <td>
                                            5%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 6,00,000 to Rs. 7,50,000
                                        </td>
                                        <td>
                                            10%
                                        </td>
                                        <td>
                                            10%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 7,50,000 to Rs. 9,00,000
                                        </td>
                                        <td>
                                            15%
                                        </td>
                                        <td>
                                            10%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 9,00,000 to Rs. 10,00,000
                                        </td>
                                        <td>
                                            15%
                                        </td>
                                        <td>
                                            15%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 10,00,000 to Rs. 12,00,000
                                        </td>
                                        <td>
                                            20%
                                        </td>
                                        <td>
                                            15%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 12,00,000 to Rs. 12,50,000
                                        </td>
                                        <td>
                                            20%
                                        </td>
                                        <td>
                                            20%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            Rs. 12,50,000 to Rs. 15,00,000
                                        </td>
                                        <td>
                                            25%
                                        </td>
                                        <td>
                                            20%
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            More than Rs. 15,00,000
                                        </td>
                                        <td>
                                            30%
                                        </td>
                                        <td>
                                            30%
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2><strong>Tax Slab Rate for FY 2022-23 (AY 2023-24), New Tax Regime - Why an Option to Choose is Given?</strong></h2>
                            <p>Under the new regime of taxation, the taxpayers can avail of an option<strong>&nbsp;</strong>to opt for one of the following-</p>
                            <ul>
                                <li>To pay tax at lower rates according to the New regime of taxation on the condition that they refrain from specific exemptions (permissible) and deductions under income tax.</li>
                                <li>To continue paying the taxes under the existing income tax rates. The taxpayer can avail of exemptions and rebates by opting into the old regime and paying tax at the existing higher rate.</li>
                            </ul>
                            <h2>Conditions for Opting for the New Tax Regime</h2>
                            <p>The taxpayers who have opted for the new regime will tend to forbear some deductions and exemptions that are available in the old regime of taxation.</p>
                            <p>Some of the common deductions &amp; exemptions not allowed under the new regime are-</p>
                            <ul>
                                <li>Leave Travel Allowance</li>
                                <li>Conveyance allowance</li>
                                <li><a href="https://groww.in/p/tax/hra-house-rent-allowance">House Rent Allowance</a></li>
                                <li>Relocation allowance</li>
                                <li>Children education allowance</li>
                                <li><a href="https://groww.in/p/tax/professional-tax">Professional tax</a></li>
                                <li>Daily expenses in the course of employment</li>
                                <li>Helper allowance</li>
                                <li>Deduction under Chapter VI-A deduction (80C,80D, 80E etc.) (Except Section 80CCD(2))</li>
                                <li>Standard deduction on salary</li>
                                <li>Interest on housing loan (Section 24)</li>
                                <li>Other special allowances (Section 10(14))</li>
                            </ul>
                            <h2><strong>Common Deductions that are Allowed under New Tax Rate Regime</strong></h2>
                            <ul>
                                <li>Investment in Notified Pension Scheme under section 80CCD(2)</li>
                                <li>Conveyance allowance for expenditure incurred for travelling to work</li>
                                <li>Depreciation under section 32, except additional depreciation</li>
                                <li>Deduction for employment of new employees under section 80JJAA</li>
                                <li>Any allowance for travelling for employment or on transfer</li>
                                <li>Transport allowance for specially-abled people</li>
                            </ul>
                            <h2><strong>Income Tax Slab Old Regime</strong></h2>
                            <p>The old income tax slabs (old regime) and the tax rates for Individuals and HUF below the age of 60 years and NRIs under the old regime:&nbsp;</p>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>
                                            <p><strong>Income Tax Slab</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Tax Rates</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Up to Rs 2,50,000*</p>
                                        </td>
                                        <td>
                                            <p>Nil</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Rs 2,50,001 - Rs 5,00,000</p>
                                        </td>
                                        <td>
                                            <p>5%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Rs 5,00,001 - Rs 10,00,000</p>
                                        </td>
                                        <td>
                                            <p>20%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>Above Rs 10,00,000</p>
                                        </td>
                                        <td>
                                            <p>30%</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>

                            <h2><strong>Surcharge</strong></h2>
                            <ul>
                                <li>
                                    <p>Surcharge applicable as per tax rates below in all categories that are afore-mentioned -</p>
                                </li>
                                <li>
                                    <p>10% of Income tax if total income is more than Rs.50 lakh</p>
                                </li>
                                <li>
                                    <p>15% of Income tax if total income is more than Rs.1 crore</p>
                                </li>
                                <li>
                                    <p>25% of Income tax if total income is more than Rs.2 crore</p>
                                </li>
                                <li>
                                    <p>37% of Income tax if total income is more than Rs.5 crore</p>
                                </li>
                            </ul>
                            <p><strong>Note </strong>- In the Budget for the year 2023, the highest surcharge rate of 37% has been decreased to 25% under the New Tax Regime (Meant to be applicable from April 1st, 2023)</p>
                            <h2><strong>Comparison Between the Old and New Tax Slabs</strong></h2>
                            <table>
                                <tbody>
                                    <tr>
                                        <td colspan="4">
                                            <p><strong>Tax Slabs Under New And Old Regime</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="2">
                                            <p><strong>Old Tax Regime</strong></p>
                                        </td>
                                        <td colspan="2">
                                            <p><strong>New Tax Regime</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p><strong>Tax Slab (Rs)</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Old Tax Rates</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>Tax Slab (Rs)</strong></p>
                                        </td>
                                        <td>
                                            <p><strong>New Tax Rates</strong></p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>0 - 2.5 Lakh</p>
                                        </td>
                                        <td>
                                            <p>0%</p>
                                        </td>
                                        <td>
                                            <p>0 - 3 Lakh</p>
                                        </td>
                                        <td>
                                            <p>0%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>2.5 Lakh - 5 Lakh</p>
                                        </td>
                                        <td>
                                            <p>5%</p>
                                        </td>
                                        <td>
                                            <p>3 Lakh - 6 Lakh</p>
                                        </td>
                                        <td>
                                            <p>5%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>5 Lakh - 10 Lakh</p>
                                        </td>
                                        <td>
                                            <p>20%</p>
                                        </td>
                                        <td>
                                            <p>6 Lakh - 9 Lakh</p>
                                        </td>
                                        <td>
                                            <p>10%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>10 Lakh and above</p>
                                        </td>
                                        <td>
                                            <p>30%</p>
                                        </td>
                                        <td>
                                            <p>9 Lakh - 12 Lakh</p>
                                        </td>
                                        <td>
                                            <p>15%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>12 Lakh - 15 Lakh</p>
                                        </td>
                                        <td>
                                            <p>20%</p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>-</p>
                                        </td>
                                        <td>
                                            <p>15 Lakh and above</p>
                                        </td>
                                        <td>
                                            <p>30%</p>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <h2><strong>Kinds of Taxable Income Sources in India</strong></h2>
                            <p>Individuals, trusts, businesses, and other entities are all subject to <a href="https://groww.in/p/tax/income-tax">income tax</a>. As a result, there are numerous forms of income that can be taxed in India.</p>
                            <p>Mentioned below are some of the different types of taxable income in India-</p>
                            <ul>
                                <li>
                                    <h3><strong>Business Income</strong><strong></strong></h3>
                                </li>
                            </ul>
                            <p>Profits earned by businesses are also counted as taxable income. The tax in this category is derived from the presumed or real income that the profession or business may generate. However, it is only done once the permitted deductions have been adjusted.</p>
                            <p>Different rates apply to individual and corporate business income in the fiscal year 2022-23. Individuals with business income will be taxed in accordance with tax slabs and rates for the fiscal year 2023-24.</p>
                            <ul>
                                <li>
                                    <h3><strong>Salary or Pension</strong><strong></strong></h3>
                                </li>
                            </ul>
                            <p>Taxes are frequently levied on the base salary, allowances, and salary profit in this category. The tax slab also applies to an individual's pension after retirement. The tax slabs rates for FY 2022-23 differ based on the age of the individual earning a salary or pension during the fiscal year.</p>
                            <ul>
                                <li>
                                    <h3><strong>Property Income</strong><strong></strong></h3>
                                </li>
                            </ul>
                            <p>Owning many houses and renting them out is an easy method to supplement your income. In such circumstances, however, revenue from house renting is recognized as part of the taxpayer's income. As a result, this income is taxable at the income tax slab rates for the fiscal year 2022-23.</p>
                            <ul>
                                <li>
                                    <h3><strong>Capital Gains Income</strong><strong></strong></h3>
                                </li>
                            </ul>
                            <p><a href="https://groww.in/p/capital-gains">Capital Gains</a> income can be generated by selling assets such as gold, real estate, mutual funds units, stocks, debentures, and so on. It can be characterized as a long-term or short-term capital gain depending on the type of asset and the earnings produced on it over time.</p>
                            <p>Despite the fact that these earnings are subject to income taxation, the capital gains tax regulations for 2022-23 are separate from the income tax slabs for 2023-24.</p>
                            <ul>
                                <li>
                                    <h3><strong>Lottery, Races, and More Income</strong><strong></strong></h3>
                                </li>
                            </ul>
                            <p>In India, winnings from lotteries, horse races, and other similar activities are taxable. However, under current tax legislation, these profits are taxed separately rather than as part of the income slab rates for the fiscal year 2022-23.</p>
                            <h2><strong>Distinction Between the Old Regime and the New Regime</strong></h2>
                            <p>In the fiscal year 2020-21, a new tax regime was implemented in addition to the existing old tax regime. Taxpayers in FY 2022-23 (AY 2023-24) can select between these income tax regimes and pay tax appropriately.</p>
                            <p>There are two significant distinctions between India's two income tax regimes:</p>
                            <ul>
                                <li>To begin with, the new regime of taxation has more tax slabs with lower tax rates than the old regime tax slab. As a result, the tax slabs for FY 2022-23 fluctuate depending on whether you choose the new or old tax regime.</li>
                                <li>Second, all of the important deductions and exemptions available under the previous tax regime, such as <a href="https://groww.in/p/tax/section-80c">Section 80C</a>, <a href="https://groww.in/p/tax/section-80d">Section 80D</a>, and so on, are no longer available if you choose the new regime of taxation.</li>
                            </ul>
                            <p>Tax deductions and exclusions enable taxpayers to decrease their tax liability by investing, saving, or spending on specified financial instruments.</p>
                            <p>Though the income tax slab 2023-24 (AY) is lower than under the previous regime, the new regime of tax provides very few exemptions or deduction choices.</p>
                            <p>In comparison, the previous tax scheme allowed for up to 70 deductions or exclusions to reduce your taxable income and income tax liability in the fiscal year 2022-23.</p>
                        </article>
                    </Container>
                </section>
            </div>
        </Layout>
    )
}