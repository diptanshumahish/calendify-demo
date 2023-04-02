import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Calendify from 'calendify'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'




export default function Home() {
  const [dates, setDates] = useState([]);
  const [month, setMonth] = useState("");
  const [year, setYear] = useState(0);
  const [day, setDay] = useState(0);
  const [today, setToday] = useState('');
  const [constMonth, setConstMonth] = useState('');
  const [constYear, setConstYear] = useState(0);

  const getData = () => {
    var temp = Calendify.getCalendar();
    setDates(temp.days);
    setMonth(temp.month);
    setConstMonth(temp.month);
    setConstYear(temp.year);
    setYear(temp.year);
    setDay(temp.today);
    setToday(temp.day);
  }

  useEffect(() => {
    getData();
  }, [])
  return (
    <>
      <Head>
        <title>Calendify Demo</title>
        <meta name="keywords" content="Calendify, calendify, calendify-demo, diptanshumahish" />
        <meta name="description" content="Demo for the Caledify package, make simple lightweight dynamic calendars, with ease" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name='author' content='Diptanhu Mahish' />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <nav >
          <div id="logo" onClick={() => {

          }}>
            <Image src="/assets/calendify.png" height={40} width={40} alt="calendifyimage" />
            <div>Calendify</div>
          </div>
          <DropdownMenu.Root >
            <DropdownMenu.Trigger id={styles.back}>
              <div id="menu">
                <Image src="/assets/menu.png" alt="menu-icon" height={20} />
              </div>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content id={styles.dropBack}>
              <DropdownMenu.Item className={styles.dropItem}>
                <Link href='https://www.npmjs.com/package/calendify'>
                  npm
                </Link>
              </DropdownMenu.Item>
              <DropdownMenu.Item className={styles.dropItem}>
                <Link href='https://github.com/diptanshumahish/calendify'>
                  Github
                </Link>
              </DropdownMenu.Item>

            </DropdownMenu.Content>

          </DropdownMenu.Root>
        </nav>

        <header>
          <article>
            <p> <span className='boldify'>Dynamic Calendar</span> is an important feature required in many websites, be it displaying important dates in a better manner or be it some random ornamentation.</p>

            <br />
            <p>Doing the logic building for displaying the calendar again and again is <span className='boldify'>waste of time</span> and using paid service calendars, increases the size of your websites</p>

            <br />
            <p>Hence I did the <span className='boldify'>logic building</span> for you, Now it&apos;s your time to beautify it!</p>

            <Link href='https://www.npmjs.com/package/calendify'>
              <div id={styles.cta} >Let&apos;s go!</div>
            </Link>
          </article>
          <iframe src="https://embed.lottiefiles.com/animation/99012"></iframe>

        </header>
        <section id={styles.whatitDoes}>
          <div className={styles.headings}>
            What does this package do?
          </div>
          <div className={styles.maincontainer}>
            <div> This package returns an <span className='code small'>Object</span> containing everything you need to make a functional dynamic calendar ✨</div>
            <div className={styles.smallHeadings}>Here&apos;s a sample output:</div>
            <Image id="code" src='/assets/code.svg' height={850} width={600} alt='code-snippet' />

          </div>
          {/* methods available */}
          <div className={styles.headings}>
            Methods available in the package:
          </div>
          <div className={styles.maincontainer}>
            There are three main methods in this package

            <div className={styles.methods}>
              <div className='code large'>getCalendar()</div>
              <div className='details'>
                This method provides an output similar to the sample output shown above, based on the current month
              </div>
            </div>

            <div className={styles.methods}>
              <div className='code large'>prevMonth()</div>
              <div className='details'>
                This method gives output by changing the current month to previous, update your state variables in a similar way as that of the getCalendar() method
              </div>
            </div>

            <div className={styles.methods}>
              <div className='code large'>nextMonth()</div>
              <div className='details'>
                This method gives output by changing the current month to next month, update your state variables in a similar way as that of the getCalendar() method
              </div>
            </div>
          </div>
          <div className='spacer'></div>

          <div className={styles.headings}>
            A demo calendar made using this package:
          </div>
          <div id="sampleCalendar">
            <div id="innerCalendar">
              <div id="topColumn">
                <div id="topLeft">
                  <div id="month" >{month}</div>
                  <div id="year">{year}</div>
                </div>
                <div id="topRight">
                  <div className='clickable' onClick={() => {
                    var temp = Calendify.prevMonth();
                    setDates(temp.days);
                    setMonth(temp.month);
                    setYear(temp.year);
                  }}>prev</div>
                  <div className='clickable' onClick={() => {
                    var temp = Calendify.nextMonth();
                    setDates(temp.days);
                    setMonth(temp.month);
                    setYear(temp.year);
                  }}>Next</div>
                </div>
              </div>
              <div id="mainCalendar">
                <div id="days">
                  <div className='day'>
                    SUN
                  </div>
                  <div className='day'>
                    MON
                  </div>
                  <div className='day'>
                    TUE
                  </div>
                  <div className='day'>
                    WED
                  </div>
                  <div className='day'>
                    THU
                  </div>
                  <div className='day'>
                    FRI
                  </div>
                  <div className='day'>
                    SAT
                  </div>

                </div>
                <div id="maindays">
                  {dates.map((ele, index) => {
                    if (ele.type === 'previousMonth') {
                      return (
                        <>
                          <div className='inactive weekDay'>
                            {ele.date}
                          </div>
                        </>
                      )
                    }
                    if (ele.type === 'activeMonth') {
                      if (ele.date === day && month === constMonth && year == constYear) {
                        return (
                          <>
                            <div className='active weekDay today'>
                              {ele.date}
                            </div>
                          </>
                        )
                      } else {
                        return (
                          <>
                            <div className='active weekDay'>
                              {ele.date}
                            </div>
                          </>
                        )
                      }
                    }
                    if (ele.type === 'nextMonth') {
                      return (
                        <>
                          <div className='inactive weekDay'>
                            {ele.date}
                          </div>
                        </>
                      )
                    }
                  })}
                </div>
              </div>
            </div>

          </div>
          <div className='spacer'></div>

          <div className={styles.headings} id="#scroll">
            How to use ?

          </div>
          <div className={styles.how}>1. Add the package</div>
          <span className='code large'>
            yarn add calendify
          </span>
          {" "}or{" "}
          <span className='code large'>
            npm install calendify
          </span>
          <div className={styles.how}>2. Import the package</div>
          <span className='code large'>
            import &apos;Calendify&apos; from &apos;Calendify&apos; ;
          </span>
          <div className={styles.how}>3. Start using ✨</div>
          <span className='code large'>
            var data = Calendify.getCalendar()
          </span>


          <div className='spacer'></div>

          <div className={styles.headings}>
            Upcoming ✨
          </div>
          <div className={styles.upcoming}>
            1. This package will be rendering a React Component along with providing data. <br />
            2. Ability to add reminders 😉
          </div>


        </section>

      </main>
      <footer>
        <div id="FootLeft">
          <Image src='/assets/calendify.png' height={50} width={50} alt="calendify-logo" />
          <div id={styles.footHead}>Calendify</div>
          <div id={styles.footDetails}>Dynamic Calendars made easy ✨</div>
          <div id={styles.footDetails}>&copy; 2023</div>
        </div>
        <div id="FootRight">
          <Link href='https://www.npmjs.com/package/calendify'>
            <div className={styles.footLinks}>npm page</div>
          </Link>

          <Link href='https://github.com/diptanshumahish/calendify'>
            <div className={styles.footLinks}>Github</div>
          </Link>
          <Link href='mailto:diptanshumahish2016@gmail.com'>
            <div className={styles.footLinks}>Contact</div>
          </Link>
        </div>
      </footer>

    </>
  )
}
