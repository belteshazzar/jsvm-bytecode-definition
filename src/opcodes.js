export const CONST = 'CONST';
export const POP = 'POP';
export const DUP = 'DUP';

export const LOAD_NAME = 'LOAD_NAME';
export const STORE_NAME = 'STORE_NAME';
export const DEFINE_NAME = 'DEFINE_NAME';
export const DEFINE_CONST = 'DEFINE_CONST';
export const SCOPE_PUSH = 'SCOPE_PUSH';
export const SCOPE_POP = 'SCOPE_POP';

export const IMPORT = 'IMPORT';
export const JMP = 'JMP';
export const JMP_IF_FALSE = 'JMP_IF_FALSE';
export const JMP_IF_TRUE = 'JMP_IF_TRUE';

export const ITER_INIT_IN = 'ITER_INIT_IN';
export const ITER_INIT_OF = 'ITER_INIT_OF';
export const ITER_HAS_NEXT = 'ITER_HAS_NEXT';
export const ITER_GET_NEXT = 'ITER_GET_NEXT';

export const NOT = 'NOT';
export const NEG = 'NEG';
export const TYPEOF = 'TYPEOF';
export const AWAIT = 'AWAIT';

export const ADD = 'ADD';
export const SUB = 'SUB';
export const MUL = 'MUL';
export const DIV = 'DIV';
export const MOD = 'MOD';

export const LT = 'LT';
export const LE = 'LE';
export const GT = 'GT';
export const GE = 'GE';
export const EQ = 'EQ';
export const NE = 'NE';
export const SEQ = 'SEQ';
export const SNE = 'SNE';
export const NULLISH_COALESCE = 'NULLISH_COALESCE';

export const MAKE_OBJ = 'MAKE_OBJ';
export const GET_PROP = 'GET_PROP';
export const SET_PROP = 'SET_PROP';
export const MAKE_ARR = 'MAKE_ARR';
export const APPEND_ELEM = 'APPEND_ELEM';
export const GET_ELEM = 'GET_ELEM';
export const SET_ELEM = 'SET_ELEM';

export const OPT_CHAIN_PROP = 'OPT_CHAIN_PROP';
export const OPT_CHAIN_ELEM = 'OPT_CHAIN_ELEM';
export const OPT_CHAIN_CALL = 'OPT_CHAIN_CALL';

export const MAKE_FUNCTION = 'MAKE_FUNCTION';
export const BIND_FUNC_NAME = 'BIND_FUNC_NAME';
export const CAPTURE_THIS = 'CAPTURE_THIS';
export const CALL = 'CALL';
export const CALL_PROP = 'CALL_PROP';
export const CALL_ELEM = 'CALL_ELEM';
export const RET = 'RET';

export const MAKE_CLASS = 'MAKE_CLASS';
export const NEW = 'NEW';
export const CALL_SUPER_CTOR = 'CALL_SUPER_CTOR';
export const CALL_SUPER_METHOD = 'CALL_SUPER_METHOD';

export const LOAD_THIS = 'LOAD_THIS';

export const OPCODES = Object.freeze({
  CONST,
  POP,
  DUP,
  LOAD_NAME,
  STORE_NAME,
  DEFINE_NAME,
  DEFINE_CONST,
  SCOPE_PUSH,
  SCOPE_POP,
  IMPORT,
  JMP,
  JMP_IF_FALSE,
  JMP_IF_TRUE,
  ITER_INIT_IN,
  ITER_INIT_OF,
  ITER_HAS_NEXT,
  ITER_GET_NEXT,
  NOT,
  NEG,
  TYPEOF,
  AWAIT,
  ADD,
  SUB,
  MUL,
  DIV,
  MOD,
  LT,
  LE,
  GT,
  GE,
  EQ,
  NE,
  SEQ,
  SNE,
  NULLISH_COALESCE,
  MAKE_OBJ,
  GET_PROP,
  SET_PROP,
  MAKE_ARR,
  APPEND_ELEM,
  GET_ELEM,
  SET_ELEM,
  OPT_CHAIN_PROP,
  OPT_CHAIN_ELEM,
  OPT_CHAIN_CALL,
  MAKE_FUNCTION,
  BIND_FUNC_NAME,
  CAPTURE_THIS,
  CALL,
  CALL_PROP,
  CALL_ELEM,
  RET,
  MAKE_CLASS,
  NEW,
  CALL_SUPER_CTOR,
  CALL_SUPER_METHOD,
  LOAD_THIS,
});

export const OPCODE_NAMES = Object.freeze(Object.values(OPCODES));