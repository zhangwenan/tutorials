
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'
import Link from '../components/Link'

const mapStateToProps = (state, ownPorps) => ({
    active: ownPorps.filter === state.visibilityFilter
})

const mapDispatchToProps = (dispatch, ownPorps) => ({
    onClick: () => {
        dispatch(setVisibilityFilter(ownPorps.filter))
    }
})

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink