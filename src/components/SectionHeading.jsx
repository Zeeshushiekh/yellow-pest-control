import PropTypes from 'prop-types'

export default function SectionHeading({ kicker, title, subtitle, align = 'left' }) {
  const alignClasses =
    align === 'center'
      ? 'text-center items-center'
      : align === 'right'
        ? 'text-right items-end'
        : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-3 ${alignClasses}`}>
      {kicker ? (
        <p className="inline-flex items-center gap-2 rounded-full bg-yellowpc-50 px-4 py-1 text-sm font-semibold text-yellowpc-800 ring-1 ring-yellowpc-200">
          <span className="h-2 w-2 rounded-full bg-yellowpc-500" aria-hidden="true" />
          {kicker}
        </p>
      ) : null}
      <h2 className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="max-w-3xl text-base leading-relaxed text-zinc-700 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}

SectionHeading.propTypes = {
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  align: PropTypes.oneOf(['left', 'center', 'right'])
}

